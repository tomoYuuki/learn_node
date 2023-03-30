// 导入一个支持promise的工具
const {promisify} = require("util");
const download = promisify(require("download-git-repo"));
const path = require("path");
const {vueRepo} = require("../config/repo-config.js");
const {commandSpawn} = require("../utils/terminal");
const {
  complier,
  writeToFile,
  createDirectoryIfNotExists,
} = require("../utils/utils");
const createProjectAction = async (project, others) => {
  console.log("yuuki help you build your project");
  // clone项目 至当前文件夹的${project}下
  await download(vueRepo, project, {clone: true});

  // 辨别是window还是mac
  let command = process.platform === "win32" ? "npm.cmd" : "npm";
  // 2.执行npm install
  await commandSpawn(command, ["install"], {cwd: `./${project}`});
  console.log("项目创建成功,正在为你跑起项目");
  // 3.执行npm run serve
  await commandSpawn(command, ["run", "serve"], {cwd: `./${project}`});
};

const createComponentAction = async (name, dest) => {
  console.log("添加组件:", name);
  // 1.有对应的ejs模块 ： ok
  // 2.编译ejs模板result ：
  let data = {
    name: name,
    lowerName: name.toLowerCase(),
  };

  // 3.将result写入到.vue文件中
  const result = await complier("vue-component.ejs", data);

  // 4.放到对应文件夹中
  const targetPath = path.resolve(dest, `${name}.vue`);

  writeToFile(targetPath, result);
};

const createPageAndRouteAction = async (name, dest) => {
  console.log(name, dest);
  // 1.有route和page的 ejs模板
  // 2.解析ejs成str
  let data = {
    name: name,
    lowerName: name.toLowerCase(),
  };
  // 先创建一下 -d 后的路径是否有 没的话创建一下
  const targetDest = path.resolve(dest, name.toLowerCase());
  createDirectoryIfNotExists(targetDest);

  const pageStr = await complier("vue-component.ejs", data);
  const targetPagePath = path.resolve(dest, `${name}.vue`);
  await writeToFile(targetPagePath, pageStr);
  const routeStr = await complier("vue-router.ejs", data);
  const targetRoutePath = path.resolve(dest, `router.js`);
  await writeToFile(targetRoutePath, routeStr);
};

const createStoreAction = async (name, dest) => {
  console.log(name, dest);
  // 1.有route和page的 ejs模板
  // 2.解析ejs成str

  // 先创建一下 -d 后的路径是否有 没的话创建一下
  const targetDest = path.resolve(dest, name.toLowerCase());
  createDirectoryIfNotExists(targetDest);

  const storeStr = await complier("vue-store.ejs", {});
  const typeStr = await complier("vue-types.ejs", {});

  writeToFile(path.resolve(targetDest, `index.js`), storeStr);
  writeToFile(path.resolve(targetDest, `types.js`), typeStr);
};

module.exports = {
  createProjectAction,
  createComponentAction,
  createPageAndRouteAction,
  createStoreAction,
};

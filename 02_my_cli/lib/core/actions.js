// 导入一个支持promise的工具
const {promisify} = require("util");
const download = promisify(require("download-git-repo"));
const {vueRepo} = require("../config/repo-config.js");
const {commandSpawn} = require("../utils/terminal");
const {complier} = require("../utils/utils");
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

const createComponentAction = async (name, others) => {
  console.log("添加组件:", name);
  // 1.有对应的ejs模块 ： ok
  // 2.编译ejs模板result ：
  let data = {
    name: name,
    lowerName: name.toLowerCase(),
  };
  const compiledVue = await complier("vue-component.ejs", {data});
  console.log(compiledVue);
  // 3.将result写入到.vue文件中
  // 4.放到对应文件夹中
};

module.exports = {
  createProjectAction,
  createComponentAction,
};

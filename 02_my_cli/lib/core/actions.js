// 导入一个支持promise的工具
const {promisify} = require("util");
const download = promisify(require("download-git-repo"));
const {vueRepo} = require("../config/repo-config.js");
// const {commandSpawn} = require("../utils/terminal");
const createProjectAction = async (project, others) => {
  console.log("yuuki help you build your project");
  // clone项目 至当前文件夹的${project}下
  await download(vueRepo, project, {clone: true});

  // 2.执行npm install
  //   await commandSpawn("npm", ["install"], {cwd: `./${project}`});
  console.log("项目创建成功");
};

module.exports = {
  createProjectAction,
};

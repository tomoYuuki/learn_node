const {program} = require("commander");
const helpOptions = () => {
  // 设置选项
  // program.option("-w --why", "give a reason");
  program.option(
    "-d --dest <dest>",
    "a destination directory. egg: -d /src/component"
  );

  program.option(
    "-f --framework <framework>",
    "switch framework .egg: -f react"
  );

  // 监听命令
  program.on("--help", function (val) {
    console.log(" ");
    console.log("欢迎使用yuuki前端开发小工具");
  });
};

module.exports = {
  helpOptions,
};

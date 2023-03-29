#!/usr/bin/env node

const {Command} = require("commander");
const program = new Command();
// 1.控制台下输入npm link 使 bin下的  命令与入口文件链接

// 设置命令的 version
program.version(require("./package.json").version);

// 设置选项
// program.option("-w --why", "give a reason");
program.option(
  "-d --dest <dest>",
  "a destination directory. egg: -d /src/component"
);

program.option("-f --framework <framework>", "switch framework .egg: -f react");

// 监听命令
program.on("--help", function (val) {
  console.log("欢迎使用yuuki前端开发小工具");
});

// 使传来的参数让program可获取到
program.parse(process.argv);

// 获取自定义指令的参数
const options = program.opts();
console.log(options.dest);

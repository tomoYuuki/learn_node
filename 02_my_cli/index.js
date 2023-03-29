#!/usr/bin/env node

const {Command} = require("commander");
const program = new Command();
// 1.控制台下输入npm link 使 bin下的  命令与入口文件链接

// 设置命令的 version
program.version(require("./package.json").version);

// 使传来的参数让program可获取到
program.parse(process.argv);

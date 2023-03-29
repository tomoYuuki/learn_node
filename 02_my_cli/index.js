#!/usr/bin/env node
const {program} = require("commander");
const {helpOptions} = require("./lib/core/help");
// 1.控制台下输入npm link 使 bin下的  命令与入口文件链接

// 设置命令的 version
program.version(require("./package.json").version);

// 抽离help相关配置
helpOptions();

// 使传来的参数让program可获取到
program.parse(process.argv);

// 获取自定义指令的参数
const options = program.opts();
console.log(options.dest);

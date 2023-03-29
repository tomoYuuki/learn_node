// 子进程：因为你在终端输入npm install时其实就是开启了子进程在执行命令
const {spawn} = require("child_process");

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    // 获取到子进程
    const childProcess = spawn(...args);
    // 将当前所有输出流，放到process 主进程里
    childProcess.stdout.pipe(process.stdout);
    childProcess.stdout.pipe(process.stderr);
    // 监听执行完
    childProcess.on("close", () => {
      resolve();
    });
  });
};

module.exports = {
  commandSpawn,
};

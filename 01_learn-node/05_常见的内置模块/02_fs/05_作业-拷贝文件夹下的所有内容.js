const fs = require("fs");
const path = require("path");

// node 05_作业-拷贝文件夹下的所有内容.js ./srcDir ./destDir
const srcDir = process.argv[2];
const destDir = process.argv[3];

function getFiles(dirname) {
  fs.readdir(dirname, {withFileTypes: true}, (err, files) => {
    for (let file of files) {
      // fs.stat(file) 可以, 但是有点麻烦
      if (file.isDirectory()) {
        const filepath = path.resolve(dirname, file.name);
        getFiles(filepath);
      } else {
        //   获取文件 base，ext，name
        // console.log(path.parse(file.name).name);

        // const fileName = path.parse(file.name).name;
        const srcFileDir = path.resolve(dirname, file.name);
        const destFileDir = path.resolve(destDir, file.name);
        fs.copyFile(srcFileDir, path.resolve(__dirname, destFileDir), (err) => {
          console.log(err);
        });
      }
    }
  });
}

getFiles(srcDir);

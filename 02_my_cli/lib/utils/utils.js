const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const complier = (ejsTemplateName, data) => {
  // 相对于utils.js这个文件，对应的模板在哪个位置
  const relativeTemplatePosition = `../templates/${ejsTemplateName}`;
  const templatePath = path.resolve(__dirname, relativeTemplatePosition);
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, {data}, (err, str) => {
      if (err) {
        reject(err);
      }
      resolve(str);
    });
  });
};

// 如果路径不存在，就创建不存在的文件夹
function createDirectoryIfNotExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, {recursive: true});
    return true;
  } else {
    return true;
  }
}

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
};

module.exports = {
  complier,
  writeToFile,
  createDirectoryIfNotExists,
};

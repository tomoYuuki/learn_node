const ejs = require("ejs");
const path = require("path");
const complier = (ejsTemplateName, data) => {
  // 相对于utils.js这个文件，对应的模板在哪个位置
  const relativeTemplatePosition = `../templates/${ejsTemplateName}`;
  const templatePath = path.resolve(__dirname, relativeTemplatePosition);
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, (err, str) => {
      if (err) {
        reject(err);
      }
      resolve(str);
    });
  });
};

module.exports = {
  complier,
};

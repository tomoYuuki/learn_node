import path from "path";

const basepath = "../User/why";
const filename = "/abc.txt";
const othername = "/why.js";

// const filepath1 = path.join(basepath, filename);
const filepath1 = path.resolve(basepath, othername);
console.log(filepath1);

const fs = require("fs");
const [str1, str2] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(str1 + str2);
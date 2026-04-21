const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim();

// for(const letter of str) {
//     console.log(letter);
// }

// 배열 고차 함수 메서드를 활용한 별해
str.split("").forEach((el) => console.log(el));
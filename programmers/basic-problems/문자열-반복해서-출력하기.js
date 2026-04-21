const fs = require("fs");
const [str, n] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 일반적인 문제 해결 방법
let result = "";
for(let i = 0; i < Number(n); i++) {
    result += str;
}

console.log(result);

// 문자열 내장 메서드를 활용한 별해
console.log(str.repeat(Number(n)));
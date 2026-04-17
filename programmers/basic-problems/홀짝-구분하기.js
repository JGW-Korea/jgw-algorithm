const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

function solution(n) {
    if(n % 2 === 0) return `${n} is even`;
    return `${n} is odd`;
}

console.log(solution(N));
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(str) {
  let answer = "";

  // 주어진 str을 문자 단위로 순회한다.
  for(const letter of str) {
    const letterCode = letter.charCodeAt();
    
    // 65 ~ 90 사이 -> 대문자
    if(letterCode >= 65 && letterCode <= 90) answer += String.fromCharCode(letterCode + 32);

    // 97 ~ 122 사이 -> 소문자
    else {
      answer += String.fromCharCode(letterCode - 32);
    }
  }

  return answer;
}

console.log(solution(input));
const fs = require("fs");
const [my_string, overwrite_string, s] = fs.readFileSync("index.txt").toString().trim().split("\n");

/**
 * 문제 정의
 * - 입력으로 my_string, overwrite_string, s이 주어진다.
 * - 이때 my_string 전체 문자열 s ~ overwrite_string.length까지의 부분을 overwrite_string으로 대체한 결과를 반환한다.
 * 
 * @param {string} my_string 
 * @param {string} overwrite_string
 * @param {number} s
 * @returns {string}
*/
function solution(my_string, overwrite_string, s) {
  let answer = "";

  let overWriteStringIndex = 0; // overwrite_string 인덱스 값
  
  for(let i = 0; i < my_string.length; i++) {
    if(i < s || overWriteStringIndex >= overwrite_string.length) answer += my_string[i];
    else {
      answer += overwrite_string[overWriteStringIndex++];
    }
  }

  return answer;
}

console.log(solution(my_string, overwrite_string, Number(s)));
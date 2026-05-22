function solution(my_string, m, c) {
  // 1. 입력으로 주어진 my_string을 m 길이씩 나뉜다.
  const row = [];
  for(let i = 0; i < my_string.length; i += m) {
    row.push(my_string.slice(i, i + m));
  }

  // 2. m 길이씩 나눈 my_string을 c행에 해당하는 값들로 조합
  let answer = "";
  for(const letter of row) {
    answer += letter[c - 1];
  }

  return answer;
}
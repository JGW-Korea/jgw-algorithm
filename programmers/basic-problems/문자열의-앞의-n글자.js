function solution(my_string, n) {
  let answer = "";

  for(let i = 0; i < n; i++) {
    answer += my_string[i];
  }
  
  return answer;

  // 한 줄 로직
  // return my_string.slice(0, n);
}
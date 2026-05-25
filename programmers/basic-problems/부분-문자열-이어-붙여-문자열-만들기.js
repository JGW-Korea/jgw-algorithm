function solution(my_string, parts) {
  let answer = "";

  for(let i = 0; i < my_string.length; i++) {
    const [s, e] = parts[i];

    for(let j = s; j < e + 1; j++) {
      answer += my_string[i][j];
    }
  }

  return answer;
}
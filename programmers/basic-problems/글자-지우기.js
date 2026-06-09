function solution(my_string, indices) {
  const isUsed = new Array(my_string.length).fill(true);

  for(const indice of indices) {
    isUsed[indice] = false;
  }

  let answer = "";
  for(let i = 0; i < isUsed.length; i++) {
    if(isUsed[i]) {
      answer += my_string[i];
    }
  }

  return answer;
}

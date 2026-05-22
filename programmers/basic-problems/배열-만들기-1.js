function solution(n, k) {
  const answer = [];

  let multiple = 0;
  let time = 1;

  while(true) {
    multiple = k * time++;

    if(multiple <= n) answer.push(multiple);
    else {
      break;
    }
  }

  return answer;
}
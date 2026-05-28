function solution(n) {
  const answer = [n];

  // 콜라츠 수열 -> 1000 이하의 수는 짝수일 경우 2로 나누고, 홀수일 경우 3 * x + 1로 바꾸는 계산을 과정을 반복하면 언제가는 1이되는 수열
  while(answer.at(-1) !== 1) {
    const currentNumber = answer.at(-1);

    if(currentNumber % 2 === 0) answer.push(Math.floor(currentNumber / 2));
    else {
      answer.push(3 * currentNumber + 1);
    }
  }

  return answer;
}

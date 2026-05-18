function solution(arr) {
  const answer = [];

  for(const element of arr) {
    if(element % 2 === 0 && element >= 50) answer.push(Math.floor(element / 2));
    else if(element % 2 === 1 && element < 50) answer.push(element * 2);
    else {
      answer.push(element);
    }
  }

  return answer;
}
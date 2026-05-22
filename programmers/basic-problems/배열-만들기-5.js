function solution(intStrs, k, s, l) {
  const answer = [];

  for(const intStr of intStrs) {
    const number = Number(intStr.slice(s, s + l));
    
    if(k < number) {
      answer.push(number);
    }
  }

  return answer;
}
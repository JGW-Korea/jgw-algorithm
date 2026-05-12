function solution(num, n) {
  // num이 n의 배수인 경우 -> 1 반환
  if(num % n === 0) return 1;
  
  // num이 n의 배수가 아닌 경우 -> 0 반환
  else {
    return 0;
  }
}
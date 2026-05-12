function solution(number, n, m) {
  // number가 n의 배수이면서, m의 배수인 경우(공배수) -> 1 반환
  if(number % n === 0 && number % m === 0) return 1;

  // 둘 중 하나라도 아닌 경우 -> 0 반환
  else {
    return 0
  }
}
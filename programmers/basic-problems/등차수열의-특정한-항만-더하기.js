function solution(a, d, included) {
  let answer = 0;

  for(const include of included) {
    if(include) {
      answer += a;
    }

    a += d;
  }

  return answer;
}
function solution(n, control) {
  let answer = n;
  
  // control은 w, s, a, d 4개의 문자로만 구성되어 있으며, 각 문자에 따라 규칙이 있다.
  // - "w" : n이 1 커집니다.
  // - "s" : n이 1 작아집니다.
  // - "d" : n이 10 커집니다.
  // - "a" : n이 10 작아집니다.
  for(const char of control) {
    switch(char) {
      case "w": {
        answer += 1;
        break;
      }
      case "s": {
        answer -= 1;
        break;
      }
      case "d": {
        answer += 10;
        break;
      }
      default: {
        answer -= 10;
      }
    }
  }

  return answer;
}
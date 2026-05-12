// 홀수 판별 헬퍼 함수
function isOdd(num) {
  return num % 2 === 1;
}

// 짝수 판별 헬퍼 함수
function isEven(num) {
  return num % 2 === 0
}

function solution(n) {
  let answer = 0;

  // n의 값이 홀수인 경우 -> n 이하의 홀수 양의 정수 합을 반환
  if(isOdd(n)) {
    for(let i = n; i > 0; i--) {
      if(!isOdd(i)) continue;
      else {
        answer += i;
      }
    }
  }

  // n의 값이 짝수인 경우 -> n 이하의 짝수 양의 정수의 제곱의 합을 반환
  else {
    for(let i = n; i > 0; i--) {
      if(!isEven(i)) continue;
      else {
        answer += Math.pow(i, 2);
      }
    }
  }
  
  return answer;
}
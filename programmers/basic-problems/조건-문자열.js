// 등호(=) 기호 만족 여부 헬퍼 함수
function isEqualSign(eq) {
  return eq === "=";
}

function solution(ineq, eq, n, m) {
  let answer = false;
  
  switch(ineq) {
    case ">": {
      if(isEqualSign(eq)) {
        answer = n >= m;
        break;
      }

      answer = n > m;
      break;
    }
    case "<": {
      if(isEqualSign(eq)) {
        answer = n <= m;
        break;
      }

      answer = n < m;
      break;
    }
  }

  return Number(answer);
}
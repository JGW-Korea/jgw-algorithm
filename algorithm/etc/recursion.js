// 재귀 함수를 활용한 팩토리얼
function recursionFactorial(n) {
  if(n <= 1) {
    return 1;
  }

  return n * recursionFactorial(n - 1);
}

// 대부분의 재귀 함수는 반복문으로 대체가 가능하다.
function iterationFactorial(n) {
  let result = 1;

  for(let i = 1; i < n + 1; i++) {
    result = result * i;
  }

  return result;
}

iterationFactorial(5);
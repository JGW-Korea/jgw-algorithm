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

// 꼬리 재귀를 활용한 팩토리얼
// - 꼬리 재귀를 활용하면, 재귀 호출 자체가 함수의 마지막 연산으로 수행된다.
// - 이로 인해, 일반적인 재귀 함수와 달리 해결한 부분 문제를 이전으로 돌아갈 필요가 없게 된다.
// - 따라서 일부 프로그래밍 언어의 런타임 환경에서는 꼬리 재귀 구조의 재귀 함수의 경우에는 재귀 호출 당시 이전 호출 상태를 제거하고, 다음 호출 정보로 대체하여
//   메모리 사용량을 절약해주고, 스택 오버플로우(Stack Overflow) 문제를 방지할 수 있다.
// - 다만 이는 꼬리 호출 최적화(TCO, Tail Call Optimization)을 제공하는 프로그래밍 언어에 해당하고 JavaScript는 제공하지 않아 일반 재귀와 동일하게 동작한다.
function tailRecursionFactorial(n, total) {
  if(n <= 1) {
    return total;
  }

  return tailRecursionFactorial(n - 1, n * total);
}
/**
 * 스택(Stack) 자료구조를 배열로 표현할 경우에는 JavaScript에서 제공하는 배열 객체 메서드를 활용할 수 있다.
 * - JavaScript 배열의 경우에는 동적 배열(Dynamic Array)이기 때문에 스택을 표현하기 위한 배열의 크기를 지정하지 않아도 된다.
 * - 또한 배열의 마지막 위치에 원소를 추가하거나 삭제함으로, 시간 복잡도도 O(1) 상수 시간을 유지할 수 있다.
 * - 이처럼 편하게 스택을 표현하고 활용할 수 있다는 장점은 있지만, 일반적으로 JavaScript는 배열을 객체로 관리하기 때문에 다른 프로그래밍 언어보다 메모리 공간을 더 많이 차지할 수도 있다.
*/

const stack = [];

// 원소 추가
for(let i = 0; i < 10; i++) {
  stack.push(i + 1);
}

// 원소 제거
for(let i = 0; i < 3; i++) {
  console.log(stack.pop());
}

// 최상위 원소 확인
console.log(stack[stack.length - 1]); // 인덱스 접근 방식
console.log(stack.at(-1));            // 메서드 접근 방식
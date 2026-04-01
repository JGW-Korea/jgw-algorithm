/**
 * 큐(Queue) 자료구조를 배열로 표현할 경우에는 JavaScript에서 제공하는 배열 객체 메서드를 활용할 수 있다.
 * - JavaScript 배열의 경우에는 동적 배열(Dynamic Array)이기 때문에 스택을 표현하기 위한 배열의 크기를 지정하지 않아도 되고, 배열이 가득차게 되는 문제가 발생하지 않는다.
 * - 다만, 배열 자체로 큐 자료구조를 표현할 경우 첫 번째 원소와 가까울 수록 더 많은 이동(Shift) 과정이 발생하게 된다.
 * - 즉 큐(Queue)라는 자료구조 자체가 FIFO 특성을 가지기 때문에 배열을 활용하면 구현 복잡도는 낮출 수 있지만, 이동 과정이 동반되기 때문에 입력 크기(n)에 따라 많은 이동 과정이 발생할 수 있다.
*/

// 배열 내장 메서드를 활용한 큐(Queue) 자료구조 표현 방법
function arrayBuiltInMethodBasedQueue() {
  const queue = [];

  // 원소 추가
  for(let i = 0; i < 10; i++) {
    queue.push(i + 1); // push는 원소를 추가하는 메서드이다. 그러나 큐에서는 원소를 추가하는 기능을 enqueue라고 표현한다.
  }

  // 원소 제거
  for(let i = 0; i < 3; i++) {
    console.log(queue.shift()); // shift는 첫 번째 원소를 제거하는 메서드이다. 그러나 큐에서는 원소를 제거하는 기능을 dequeue라고 표현한다.
  }

  // 첫 번째 원소 확인
  console.log(queue[0]);     // 인덱스 접근 방식
  console.log(queue.at(0));  // 메서드 접근 방식
}

// 이동(Shift) 과정을 줄이기 위해 인덱스를 활용한 큐(Queue) 자료구조 표현 방법
function arrayIndexBasedQueue() {
  const queue = [];
  
  let front = 0;
  let rear = 0;

  // 원소 삽입
  for(let i = 0; i < 10; i++) {
    queue[rear] = i + 1;
    rear += 1;
  }

  // 원소 제거
  for(let i = 0; i < 3; i++) {
    console.log(queue[front]);
    front += 1;
  }

  // 최상위 원소 확인
  console.log(queue[front]);
}

arrayIndexBasedQueue();
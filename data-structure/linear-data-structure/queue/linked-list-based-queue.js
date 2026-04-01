class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

// 연결 리스트를 활용하여 큐를 표현하면 배열에서의 생긴 이동(Shift) 과정이 발생하지 않아 성능상 유리할 수 있다.
// 다만 구현 복잡도가 증가하고, 더 많은 메모리 공간을 차지할 수 있다는 문제가 발생할 수 있다.
class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    
    if(this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.length += 1;
  }
  
  dequeue() {
    if(this.isEmpty()) return;

    let returnValue = this.front.value;

    // 연결 리스트에 하나의 원소만 있는 경우
    if(this.length === 1) {
      this.front = null;
      this.rear = null;
    }

    // 연결 리스트에 여러 개의 원소가 있는 경우
    else {
      this.front = this.front.next;
    }

    this.length -= 1;
    return returnValue;
  }
  
  isEmpty() {
    return this.front === null;
  }
}

const queue = new LinkedListQueue();

queue.enqueue(10);
queue.dequeue();
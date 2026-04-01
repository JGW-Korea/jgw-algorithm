class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

// 스택을 연결 리스트로 구현할 경우 현재의 위치를 별도로 저장하지 않게 되면, 삭제 과정에서 마지막 노드까지 이동하는 과정이 동반되어 삭제 시 O(N) 시간 복잡도를 가진다.
class LinkedListStack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  pop() {
    if(this.isEmpty()) return;

    let returnValue = 0;

    if(this.length === 1) {
      returnValue = this.head.value;

      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while(currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }

      returnValue = currentNode.next.value;
      currentNode.next = null;
      this.tail = currentNode;
    }

    this.length -= 1;
    return returnValue;
  }

  top() {
    if(this.isEmpty()) return;

    return this.tail.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const stack = new LinkedListStack();

for(let i = 0; i < 5; i++) {
  stack.push((i + 1) * 10);
}

for(let i = 0; stack.length; i++) {
  console.log(stack.pop());
}
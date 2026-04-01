// 연결 리스트를 구성하는 하나의 노드
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 연결 리스트 로직
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 첫 번째 위치에 원소를 추가하는 메서드
  unshift(value) {
    const newNode = new Node(value);

    // 헤드 노드가 비어있는 경우
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    // 헤드 노드가 비어있지 않은 경우
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
  }

  // 마지막 위치에 새로운 원소를 추가하는 메서드
  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) this.unshift(value); // 헤드 노드가 비어있는 경우
    
    // 헤드 노드가 비어있지 않은 경우
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  // 연결 리스트 원하는 위치에 원소를 추가하는 메서드
  insert(index, value) {
    // 추가하고자 하는 위치가 연결 리스트 범위 내가 아닌 경우
    if(index > this.length || index <= 0) {
      throw new Error("Index is out of bounds of the linked list");
    }

    if(this.isEmpty() || index === 1) this.unshift(value); // 첫 번째 위치에 원소를 추가하는 경우
    else if(index === this.length) this.push(value);      // 마지막 위치에 원소를 추가하는 경우
    
    // 중간 위치에 원소를 추가할 경우
    else {
      const newNode = new Node(value);

      let currentNode = this.head;
      let currentIndex = 1;

      // 현재 위치가 추가하려는 인덱스 위치보다 낮은 경우
      while(currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex += 1;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;

      this.length += 1;
    }
  }

  // 연결 리스트 첫 번째 위치의 원소를 제거하는 메서드
  shift() {
    if(this.isEmpty()) throw new Error("Linked List is Empty");

    let returnValue = this.head.value;

    // 연결 리스트에 하나의 원소만 있는 경우
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    // 연결 리스트에 여러 개의 원소가 있는 경우
    else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return returnValue;
  }

  // 연결 리스트 마지막 위치의 원소를 제거하는 메서드
  pop() {
    if(this.isEmpty()) throw new Error("Linked List is Empty");

    let returnValue;

    // 연결 리스트에 하나의 원소만 있는 경우
    if(this.length === 1) {
      returnValue = this.head.value;
      this.head = null;
      this.tail = null;
    }

    // 연결 리스트에 하나의 원소만 있는 경우
    else {
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

  // 연결 리스트 원하는 위치에 원소를 제거하는 메서드
  remove(index) {
    if(this.isEmpty()) throw new Error("Linked List is Empty");
    if(index > this.length || index <= 0) {
      throw new Error("Index is out of bounds of the linked list");
    }
    if(index === undefined) throw new Error("index parameter is required");

    if(index === 1) return this.shift();               // 첫 번째 위치 원소 제거할 경우
    else if(index === this.length) return this.pop();  // 마지막 위치 원소 제거할 경우

    // 중간 위치 원소 제거할 경우
    else {
      let currentNode = this.head;
      let currentIndex = 1;

      while(currentIndex !== index - 1) {
        currentNode = currentNode.next;
        currentIndex += 1;
      }

      const returnValue = currentNode.next.value; 
      currentNode.next = currentNode.next.next;
      this.length -= 1;

      return returnValue
    }
  }

  // 연결 리스트 특정 위치 값 수정 메서드
  set(index, value) {
    const updateNode = this.get(index, true);

    if(value === undefined) {
      throw new Error("value parameter is required");
    }

    updateNode.value = value;
  }

  // 연결 리스트 특정 위치 값 조회 메서드
  get(index, isFlag) {
    if(this.isEmpty()) throw new Error("Linked List is Empty");
    if(index > this.length || index <= 0) {
      throw new Error("Index is out of bounds of the linked list");
    }
    if(index === undefined) throw new Error("index parameter is required");

    let currentNode = this.head;
    let currentIndex = 1;

    while(currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    return isFlag ? currentNode : currentNode.value;
  }

  // 연결 리스트 내부에 저장된 모든 값 조회 메서드
  print() {
    if(this.head === null) {
      return "Linked List is Empty";
    }
    
    let currentNode = this.head;

    const result = [];
    while(currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next
    }

    return result.join(", ");
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const linkedList = new LinkedList();

linkedList.unshift(10);
linkedList.push(20);
linkedList.insert(1, 30);
linkedList.insert(linkedList.length, 40);
linkedList.insert(Math.floor(linkedList.length / 2), 50);
console.log(linkedList.print());


console.log(linkedList.length)

linkedList.remove(linkedList.length - 1);
console.log(linkedList.print());

linkedList.set(3, 100);
console.log(linkedList.print());

linkedList.clear();
console.log(linkedList.print());

// 트리를 구성하는 노드를 연결 리스트(Linked List)로 표현한다.
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class LinkedListBasedBinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    // 루트 노드가 채워지지 않은 경우
    if(this.root === null) {
      this.root = newNode;
    }

    // 루트 노드가 채워져 있는 경우 -> 레벨 순회를 통해 왼쪽 또는 오른쪽 자식 노드가 없는 노드의 위치를 판별한다.
    else {
      const queue = [this.root];

      let targetNode;
      while(queue.length) {
        const currentNode = queue.shift();

        if(currentNode.left === null || currentNode.right === null) {
          targetNode = currentNode;
          break;
        }

        queue.push(currentNode.left, currentNode.right);
      }

      // 왼쪽 또는 오른쪽 자식 노드가 없는 노드의 왼쪽부터 새로운 노드를 구성한다.
      targetNode.left === null ? targetNode.left = newNode : targetNode.right = newNode;
    }
  }

  // 연결 리스트 기반 이진 트리 - 전위 순회(preorder): V -> L -> R
  preorder(currentNode = this.root) {
    console.log(currentNode.value);
    if(currentNode.left !== null) this.preorder(currentNode.left);
    if(currentNode.right !== null) this.preorder(currentNode.right);
  }

  // 연결 리스트 기반 이진 트리 - 중위 순회(inorder): L -> V -> R
  inorder(currentNode = this.root) {
    if(currentNode.left !== null) this.inorder(currentNode.left);
    console.log(currentNode.value);
    if(currentNode.right !== null) this.inorder(currentNode.right);
  }
  
  // 연결 리스트 기반 이진 트리 - 후위 순회(postorder): L -> R -> V
  postorder(currentNode = this.root) {
    if(currentNode.left !== null) this.postorder(currentNode.left);
    if(currentNode.right !== null) this.postorder(currentNode.right);
    console.log(currentNode.value);
  }

  // 연결 리스트 기반 이진 트리 - 레벨 순회(level-order)
  levelOrder(currentNode = this.root) {
    const result = [];
    
    // BFS 탐색을 위한 큐(Queue) 자료구조를을 생성하고, 첫 번째로 탐색할 노드(루트 노드)를 추가한다.
    const queue = [currentNode];

    // BFS 탐색 수행
    while(queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if(currentNode.left !== null) queue.push(currentNode.left);
      if(currentNode.right !== null) queue.push(currentNode.right);
    }

    return result.join(" ");
  }
}

const binaryTree = new LinkedListBasedBinaryTree();

binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);

//    1
//   2 3
// 4 5 6 7

// 전위 -> 1 2 4 5 3 6 7
// 중위 -> 4 2 5 1 6 3 7
// 후위 -> 4 5 2 6 7 3 1

binaryTree.preorder();
binaryTree.inorder();
binaryTree.postorder();
binaryTree.levelOrder()
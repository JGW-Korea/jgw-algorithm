class ArrayBasedBirayTree {
  constructor() {
    this.binaryTree = [ null ];
  }

  insert(value) {
    this.binaryTree.push(value);
  }

  pop() {
    return this.binaryTree.pop();
  }

  // 1차원 배열 기반 이진 트리 - 전위 순회(preorder): V -> L -> R
  preorder(currentIndex = 1) {
    console.log(this.binaryTree[currentIndex]);
    if(this.binaryTree[currentIndex * 2]) this.preorder(currentIndex * 2);
    if(this.binaryTree[(currentIndex * 2) + 1]) this.preorder((currentIndex * 2) + 1);
  }

  // 1차원 배열 기반 이진 트리 - 중위 순회(inorder): L -> V -> R
  inorder(currentIndex = 1) {
    if(this.binaryTree[currentIndex * 2]) this.inorder(currentIndex * 2);
    console.log(this.binaryTree[currentIndex]);
    if(this.binaryTree[(currentIndex * 2) + 1]) this.inorder((currentIndex * 2) + 1);
  }

  // 1차원 배열 기반 이진 트리 - 후위 순회(postorder): L -> R -> V
  postorder(currentIndex = 1) {
    if(this.binaryTree[currentIndex * 2]) this.postorder(currentIndex * 2);
    if(this.binaryTree[(currentIndex * 2) + 1]) this.postorder((currentIndex * 2) + 1);
    console.log(this.binaryTree[currentIndex]);
  }

  // 1차원 배열 기반 이진 트리 - 레벨 순서 순회(level-order)
  levelOrder(currentIndex = 1) {
    const result = [];

    // BFS 탐색을 위한 큐(Queue) 자료구조를을 생성하고, 첫 번째로 탐색할 노드(루트 노드)를 추가한다.
    const queue = [];
    queue.push(currentIndex);
    
    // BFS 탐색 수행
    while(queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode);
      
      let leftChildIdx = currentNode * 2;         // 왼쪽 자식 노드 위치를 계산한다.
      let rightchildIdx = (currentNode * 2) + 1;  // 오른쪽 자식 노드 위치를 계산한다.
      
      // 왼쪽 자식 노드(Left Child Node) 위치 값이 트리의 노드 개수를 벗어나지 않으면서, 값이 있는 경우
      if(leftChildIdx < this.binaryTree.length && this.binaryTree[leftChildIdx]) {
        queue.push(leftChildIdx);
      }
      
      // 오른쪽 자식(Right Child Node) 위치 값이 트리의 노드 개수를 벗어나지 않으면서, 값이 있는 경우
      if(rightchildIdx < this.binaryTree.length && this.binaryTree[rightchildIdx]) {
        queue.push(rightchildIdx);
      }
    }
    
    return result.join(" ");
  }


}

const binaryTree = new ArrayBasedBirayTree();

binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);

binaryTree.preorder();
binaryTree.inorder();
binaryTree.postorder();
binaryTree.levelOrder();
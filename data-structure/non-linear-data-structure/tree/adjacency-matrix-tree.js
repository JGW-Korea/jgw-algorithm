const NODE = 7;
const EDGES = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 6],
  [3, 7],
];

// 단순히 연결 정보만 나타내는 인접 행렬로 트리를 표현한 방법
function representTreeAsAdjacencyMatrix() {
  /*
    1: [0, 1, 1, 0, 0, 0, 0] // 1 -> 2, 3
    2: [1, 0, 0, 1, 1, 0, 0] // 2 -> 1, 4, 5
    3: [1, 0, 0, 0, 0, 1, 1] // 3 -> 1, 6, 7
    4: [0, 1, 0, 0, 0, 0, 0] // 4 -> 2
    5: [0, 1, 0, 0, 0, 0, 0] // 5 -> 2
    6: [0, 0, 1, 0, 0, 0, 0] // 6 -> 3
    7: [0, 0, 1, 0, 0, 0, 0] // 7 -> 3
  */
  const tree = Array.from({ length: NODE + 1 }, () => new Array(NODE).fill(0));

  // 간선 집합을 통해 그래프를 구성한다. (노드는 0이 아닌 1부터 시작)
  for(const [from, to] of EDGES) {
    // 트리는 무방향 그래프이기 때문에 간선에 방향이 없어 두 간선을 동일한 간선으로 취급한다.
    tree[from][to] = 1;
    tree[to][from] = 1;
  }

  tree.forEach((node) => console.log(`[ ${node.join(" ")} ]`));
}

// 연결 정보와 부모-자식 관계도 함께 나타내는 인접 행렬로 트리를 표현한 방법
function representTreeWithParentInfo() {
  /*
    1: [0, 1, 1, 0, 0, 0, 0] // 1 -> 2, 3
    2: [1, 0, 0, 1, 1, 0, 0] // 2 -> 1, 4, 5
    3: [1, 0, 0, 0, 0, 1, 1] // 3 -> 1, 6, 7
    4: [0, 1, 0, 0, 0, 0, 0] // 4 -> 2
    5: [0, 1, 0, 0, 0, 0, 0] // 5 -> 2
    6: [0, 0, 1, 0, 0, 0, 0] // 6 -> 3
    7: [0, 0, 1, 0, 0, 0, 0] // 7 -> 3
  */
  const tree = Array.from({ length: NODE + 1 }, () => new Array(NODE + 1).fill(0));

  // 간선 집합을 통해 그래프를 구성한다. (노드는 0이 아닌 1부터 시작)
  for(const [from, to] of EDGES) {
    // 트리는 무방향 그래프이기 때문에 간선에 방향이 없어 두 간선을 동일한 간선으로 취급한다.
    tree[from][to] = 1;
    tree[to][from] = 1;
  }


  // BFS 탐색을 통해 그래프의 부모-자식 관계를 구성한다.
  /*
            1
         /     \
       2         3
     /   \     /   \
    4     5   6     7
  */
  const parent = Array.from({ length: NODE + 1 }, () => Infinity);
  parent[1] = 0;

  // BFS 탐색을 위한 큐, 방문 처리 배열 생성
  const visited = Array.from({ length: NODE + 1 }, () => false);
  const queue = [1];

  visited[1] = true;

  while(queue.length) {
    const currentNode = queue.shift();

    for(let nextNode = 1; nextNode < NODE + 1; nextNode++) {
      if(tree[currentNode][nextNode] === 1 && !visited[nextNode]) {
        parent[nextNode] = currentNode;
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }

  // DFS 탐색 방식
  // function dfs(currentNode) {
  //   for(let nextNode = 1; nextNode < NODE + 1; nextNode++) {
  //     if(tree[currentNode][nextNode] === 1 && !visited[nextNode]) {
  //       parent[nextNode] = currentNode;
  //       visited[nextNode] = true;
  //       dfs(nextNode);
  //     }
  //   }
  // }
  
  // dfs(1);

  console.log("parent", parent.join(" "));
}

representTreeWithParentInfo()
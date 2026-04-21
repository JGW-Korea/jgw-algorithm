// 재귀 함수(Recursion Function) 기반 DFS 알고리즘
function recursionDfs(graph, startNode) {
  const visited = Array.from({ length: graph.length }, () => false);
  const result = [];

  // DFS 탐색
  function recursion(currentNode) {
    visited[currentNode] = true;  // 현재 노드를 방문 처리한다.
    result.push(String.fromCharCode(currentNode + 65));

    // 현재 노드와 연결된 노드들을 순회한다.
    for(const nextNode of graph[currentNode]) {
      const numNextNode = nextNode.charCodeAt() - 65;
      
      if(!visited[numNextNode]) {
        recursion(numNextNode); // 방문하지 않은 다음 노드로 이동한다.
      }
    }
  }

  recursion(startNode.charCodeAt() - 65); // 재귀 호출
  
  return `DFS Result: ${result.join(" ")}`;
}

// 스택(Stack) 기반 DFS 알고리즘
function stackDfs(graph, startNode) {
  const result = [];

  // DFS를 수행하기 위해 필요한 스택과 방문 처리 배열을 생성한다.
  const visited = Array.from({ length: graph.length }, () => false);
  const stack = [];

  // DFS 수행 이전 시작 정점을 스택에 추가하고 방문 처리를 해준다.
  visited[startNode.charCodeAt() - 65] = true;
  stack.push(startNode.charCodeAt() - 65);

  // DFS 탐색
  while(stack.length !== 0) {
    const currentNode = stack.pop();
    result.push(String.fromCharCode(currentNode + 65));

    // 현재 노드와 연결된 노드의 정보를 가지고 온다.
    for(const nextNode of graph[currentNode]) {
      const numNextNode = nextNode.charCodeAt() - 65;

      if(!visited[numNextNode]) {
        visited[numNextNode] = true;
        stack.push(numNextNode);
      }
    }
  }

  return `DFS Result: ${result.join(" ")}`;
}

const graph = [
  ["B", "C", "D"],  // 0 -> A
  ["A", "F"],       // 1 -> B
  ["A", "F"],       // 2 -> C
  ["A", "E"],       // 3 -> D
  ["D"],            // 4 -> E
  ["B", "C", "G"],  // 5 -> F
  ["F"]             // 6 -> G
];

console.log(recursionDfs(graph, "A"));
console.log(stackDfs(graph, "A"));
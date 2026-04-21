function charConvertNumber(char) {
  return char.charCodeAt() - 65;
}

function bfs(graph, startNode) {
  const result = [];

  // BFS를 수행하기 위해 필요한 큐와 방문 처리 배열을 생성한다.
  const visited = Array.from({ length: graph.length }, () => false);
  const queue = [];

  // BFS 수행 이전 시작 정점을 큐에 추가하고 방문 처리를 해준다.
  const numStartNode = charConvertNumber(startNode);
  visited[numStartNode] = true;
  queue.push(numStartNode);

  // BFS 탐색
  while(queue.length !== 0) {
    const currentNode = queue.shift();
    result.push(String.fromCharCode(currentNode + 65));

    // 현재 노드와 연결된 노드의 정보를 가지고 온다.
    for(const nextNode of graph[currentNode]) {
      const numNextNode = charConvertNumber(nextNode);

      // 방문하지 않은 경우
      if(!visited[numNextNode]) {
        visited[numNextNode] = true;  // 방문 처리 수행
        queue.push(numNextNode);      // 해당 노드와 연결된 노드도 방문하기 위해 큐에 삽입
      }
    }
  }

  return result.join(" ");
}

const graph = [
  ["B", "C", "D"],  // 0 -> A
  ["A", "C", "F"],  // 1 -> B
  ["A", "B", "F"],  // 2 -> C
  ["A", "E"],       // 3 -> D
  ["D"],            // 4 -> E
  ["B", "C", "G"],  // 5 -> F
  ["E"]             // 6 -> G
];

console.log(bfs(graph, "A"));
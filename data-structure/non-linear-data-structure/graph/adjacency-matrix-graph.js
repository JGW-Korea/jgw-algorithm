// 인접 행렬(Adjacency Matrix) 기반 무방향 그래프 표현 방법
function undirectedGraph(node, edges) {
  const graph = Array.from({ length: node }, () => new Array(node).fill(0));

  // 무방향 그래프(가중치 X)
  if(edges[0].length === 2) {
    /*
      0(A): [0, 1, 1, 1, 0, 0, 0] // A -> B, C, D
      1(B): [1, 0, 1, 0, 0, 1, 0] // B -> A, C, F 
      2(C): [1, 1, 0, 0, 0, 1, 0] // C -> A, B, F
      3(D): [1, 0, 0, 0, 1, 0, 0] // D -> A, E
      4(E): [0, 0, 0, 1, 0, 0, 0] // E -> D
      5(F): [0, 1, 1, 0, 0, 0, 1] // F -> B, C, G
      6(G): [0, 0, 0, 0, 0, 1, 0] // G -> F
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65];
      
      // 무방향 그래프의 경우 간선에 방향이 없기 때문에 두 간선을 동일한 간선으로 취급한다.
      graph[from][to] = 1;
      graph[to][from] = 1;
    }
  }
  
  // 무방향 그래프(가중치 O)
  else {
    /*
      0(A): [0, 7, 2, 9, 0, 0, 0] // A -> B(7), C(2), D(9)
      1(B): [7, 0, 6, 0, 0, 3, 0] // B -> A(7), C(6), F(3)
      2(C): [2, 6, 0, 0, 0, 5, 0] // C -> A(2), B(6), F(5)
      3(D): [9, 0, 0, 0, 4, 0, 0] // D -> A(9), E(4)
      4(E): [0, 0, 0, 4, 0, 0, 0] // E -> D(4)
      5(F): [0, 3, 5, 0, 0, 0, 8] // F -> B(3), C(5), G(8)
      6(G): [0, 0, 0, 0, 0, 8, 0] // G -> F(8)
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to, cost] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65, edge[2]];
      
      // 무방향 그래프의 경우 간선에 방향이 없기 때문에 두 간선을 동일한 간선으로 취급한다.
      graph[from][to] = cost;
      graph[to][from] = cost;
    }
  }

  graph.forEach((v) => console.log(`[ ${v.join(" ")} ]`));
}

// 인접 행렬(Adjacency Matrix) 기반 방향 그래프 표현 방법
function directedGraph(node, edges) {
  const graph = Array.from({ length: node }, () => new Array(node).fill(0));

  // 방향 그래프(가중치 X)
  if(edges[0].length === 2) {
    /*
      0(A): [0, 1, 1, 0, 0, 0, 0] // A -> B, C
      1(B): [1, 0, 0, 0, 0, 0, 0] // B -> A
      2(C): [0, 1, 0, 0, 0, 1, 0] // C -> B, F
      3(D): [1, 0, 0, 0, 1, 0, 0] // D -> A, E
      4(E): [0, 0, 0, 0, 0, 0, 0] // E -> 
      5(F): [0, 1, 0, 0, 0, 0, 0] // F -> B
      6(G): [0, 0, 0, 0, 0, 1, 0] // G -> F
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65];
      
      // 방향 그래프의 경우 간선에 방향이 존재하기 때문에, 간선이 지정한 방향으로만 이동할 수 있도록 한다.
      graph[from][to] = 1;
    }
  }
  
  // 방향 그래프(가중치 O)
  else {
    /*
      0(A): [0, 4, 7, 0, 0, 0, 0] // A -> B(4), C(7)
      1(B): [6, 0, 0, 0, 0, 0, 0] // B -> A(6)
      2(C): [0, 3, 0, 0, 0, 8, 0] // C -> B(3), F(8)
      3(D): [5, 0, 0, 0, 2, 0, 0] // D -> A(5), E(2)
      4(E): [0, 0, 0, 0, 0, 0, 0] // E -> 
      5(F): [0, 9, 0, 0, 0, 0, 0] // F -> B(9)
      6(G): [0, 0, 0, 0, 0, 1, 0] // G -> F(1)
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to, cost] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65, edge[2]];
      
      // 방향 그래프의 경우 간선에 방향이 존재하기 때문에, 간선이 지정한 방향으로만 이동할 수 있도록 한다.
      graph[from][to] = cost;
    }
  }

  graph.forEach((v) => console.log(`[ ${v.join(" ")} ]`));
}
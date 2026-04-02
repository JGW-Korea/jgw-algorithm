// 인접 리스트(Adjacency List) 기반 무방향 그래프 표현 방법
function undirectedGraph(node, edges) {
  // 동적 배열(Dynamic Array)을 제공하는 언어에서는 배열의 크기가 동적으로 증가하는 특성을 활용하여 
  // 연결 리스트를 사용하지 않고, 배열만으로도 표현할 수 있다.
  const graph = Array.from({ length: node }, () => []);

  // 무방향 그래프(가중치 X)
  if(edges[0].length === 2) {
    /*
      0(A): [1, 2, 3]  // A -> B, C, D
      1(B): [0, 2, 5]  // B -> A, C, F 
      2(C): [0, 1, 5]  // C -> A, B, F
      3(D): [0, 4]     // D -> A, E
      4(E): [3]        // E -> D
      5(F): [1, 2, 6]  // F -> B, C, G
      6(G): [5]        // G -> F
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65];
      
      // 무방향 그래프의 경우 간선에 방향이 없기 때문에 두 간선을 동일한 간선으로 취급한다.
      graph[from].push(to);
      graph[to].push(from)
    }
  }
  
  // 무방향 그래프(가중치 O)
  else {
    /*
      0(A): [[1, 7], [2, 3], [3, 9]]      // A -> B(7), C(3), D(9)
      1(B): [[0, 7], [2, 5], [5, 2]]      // B -> A(7), C(5), F(2)
      2(C): [[0, 3], [1, 5], [5, 6]]      // C -> A(3), B(5), F(6)
      3(D): [[0, 9], [4, 4]]              // D -> A(9), E(4)
      4(E): [[3, 4]]                      // E -> D(4)
      5(F): [[1, 2], [2, 6], [6, 8]]      // F -> B(2), C(6), G(8)
      6(G): [[5, 8]]                      // G -> F(8)
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to, cost] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65, edge[2]];
      
      // 무방향 그래프의 경우 간선에 방향이 없기 때문에 두 간선을 동일한 간선으로 취급한다.
      graph[from].push([to, cost]);
      graph[to].push([from, cost]);
    }
  }

  graph.forEach((v) => console.log(`[ ${v.join(" ")} ]`));
}

// 인접 리스트(Adjacency List) 기반 방향 그래프 표현 방법
function directedGraph(node, edges) {
  // 동적 배열(Dynamic Array)을 제공하는 언어에서는 배열의 크기가 동적으로 증가하는 특성을 활용하여 
  // 연결 리스트를 사용하지 않고, 배열만으로도 표현할 수 있다.
  const graph = Array.from({ length: node }, () => []);

  // 방향 그래프(가중치 X)
  if(edges[0].length === 2) {
    /*
      0(A): [1, 2]   // A -> B, C
      1(B): [0]      // B -> A
      2(C): [1, 5]   // C -> B, F
      3(D): [0, 4]   // D -> A, E
      4(E): []       // E -> 
      5(F): [1]      // F -> B
      6(G): [5]      // G -> F
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65];
      
      // 방향 그래프의 경우 간선에 방향이 존재하기 때문에, 간선이 지정한 방향으로만 이동할 수 있도록 한다.
      graph[from].push(to);
    }
  }
  
  // 방향 그래프(가중치 O)
  else {
    /*
      0(A): [[1, 4], [2, 7]]     // A -> B(4), C(7)
      1(B): [[0, 6]]             // B -> A(6)
      2(C): [[1, 3], [5, 8]]     // C -> B(3), F(8)
      3(D): [[0, 5], [4, 2]]     // D -> A(5), E(2)
      4(E): []                   // E ->
      5(F): [[1, 9]]             // F -> B(9)
      6(G): [[5, 1]]             // G -> F(1)
    */

    // 입력을 통해 간선 집합을 통해 그래프를 구성한다.
    for(const edge of edges) {
      const [from, to, cost] = [edge[0].charCodeAt() - 65, edge[1].charCodeAt() - 65, edge[2]];
      
      // 방향 그래프의 경우 간선에 방향이 존재하기 때문에, 간선이 지정한 방향으로만 이동할 수 있도록 한다.
      graph[from].push([to, cost]);
    }
  }

  graph.forEach((v) => console.log(`[ ${v.join(" ")} ]`));
}
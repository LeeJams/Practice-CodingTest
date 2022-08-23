/* 
Grape BFS/DFS 활용 문제

문제 설명
n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 
1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

제한사항
노드의 개수 n은 2 이상 20,000 이하입니다.
간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.


입출력 예
n	    vertex	                                                      return
6	    [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	    3
*/
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  breadthFirstSearch(start) {
    const bfsArr = [];
    const queue = [[start, 0]];
    const visited = {};

    visited[start] = true;

    while (queue.length) {
      const curremtVertex = queue.shift();
      bfsArr.push(curremtVertex);

      this.adjacencyList[curremtVertex[0]].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push([neighbor, curremtVertex[1] + 1]);
        }
      });
    }

    const result = bfsArr
      .filter((n) => n[1] === bfsArr[bfsArr.length - 1][1])
      .map((n) => n[0]);

    return result.length;
  }
}

function solution(n, edge) {
  let gr = new Graph();
  for (let i = 1; i <= n; i++) {
    gr.addVertex(i);
  }
  edge.forEach((ed) => {
    gr.addEdge(ed[0], ed[1]);
  });
  return gr.breadthFirstSearch(1);
}

function solution(n, edge) {
  const grape = Array.from(Array(n + 1), () => []);
  for (const [src, dest] of edge) {
    grape[src].push(dest);
    grape[dest].push(src);
  }

  const queue = [[1, 0]];
  const result = [];
  const visited = { 1: true };

  while (queue.length) {
    const current = queue.shift();
    result.push(current);

    grape[current[0]].forEach((item) => {
      if (!visited[item]) {
        visited[item] = true;
        queue.push([item, current[1] + 1]);
      }
    });
  }
  return result.filter((n) => n[1] === result[result.length - 1][1]).length;
}

function solution(n, edge) {
  const grape = Array.from(Array(n + 1), () => []);
  for (const [src, dest] of edge) {
    grape[src].push(dest);
    grape[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = [1];
  while (queue.length) {
    const src = queue.shift();
    for (const dest of grape[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((n) => max === n).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); // 3

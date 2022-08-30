/* 
최소 신장 트리 알고리즘 사용 / Union-Find 알고리즘 사용

문제 설명
n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.

다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 
예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.

제한사항
섬의 개수 n은 1 이상 100 이하입니다.
costs의 길이는 ((n-1) * n) / 2이하입니다.
임의의 i에 대해, costs[i][0] 와 costs[i] [1]에는 다리가 연결되는 두 섬의 번호가 들어있고, costs[i] [2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.
같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다. 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.
모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.
연결할 수 없는 섬은 주어지지 않습니다.

입출력 예
n	  costs	                                      return
4	  [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]	  4
*/
// 최상위 원소 찾기
function find(parent, x) {
  if (parent[x] === x) { // 부모와 원소가 같다면 최상위 원소
    return x;
  }

  // 경로 압축 최적화
  return parent[x] = find(parent, parent[x]);
}

// 두 원소 합치기
function union(parent, a, b) {
  a = find(parent, a); // a의 최상위 원소
  b = find(parent, b); // b의 최상위 원소
  if (a < b) { // 더 낮은 원소가 부모 원소가 되도록 규칙을 잡는다
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

// 두 원소가 같은 집합인지 검사
function compare(parent, a, b) {
  a = find(parent, a); // a의 최상위 원소
  b = find(parent, b); // b의 최상위 원소
  return a === b; // 같다면 같은 집합
}

function solution(n, costs) {
  let answer = 0;
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);
  console.log(sortedCosts)
  console.log(parent)
  for (const [a, b, cost] of sortedCosts) {
    // 각 정점과 간선의 가중치
    if (!compare(parent, a, b)) {
      // 두 원소가 같은 집합인지 체크. 같다면 cycle
      answer += cost; // 아니라면 answer에 가중치를 더한다
      union(parent, a, b); // 그리고나서 두 정점을 하나의 집합으로 만든다
    }
  }

  return answer; // 결과 반환
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
); // 4

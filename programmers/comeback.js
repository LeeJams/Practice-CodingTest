// 부대 복귀
// n - 총 지역 수
// roads - 왕복할 수 있는 길의 정보
// sources - 각 부대원의 위치
// destination - 도착지점

function solution(n, roads, sources, destination) {
  const result = [];
  sources.forEach((n) => {
    const way = roads.filter((m) => m.includes(n));
    console.log(way);
  });
}

console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    1
  )
); // [1, 2]
console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5
  )
); // [2, -1, 0]

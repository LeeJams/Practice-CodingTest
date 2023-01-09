// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// DFS 효율성 이슈...
function solution(maps) {
  let answer = -1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  function DFS(x, y, sum) {
    if (x === n && y === m) {
      if (answer === -1) answer = sum;
      else if (sum < answer) answer = sum;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (maps[x][y] === 1 && nx >= 0 && ny >= 0 && nx <= n && ny <= m) {
          maps[x][y] = 0;
          DFS(nx, ny, sum + 1);
          maps[x][y] = 1;
        }
      }
    }
  }
  DFS(0, 0, 1);

  return answer;
}

function solution(maps) {
  let answer = -1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while(queue.length){
      const [x, y, cnt] = queue.shift();
      if(x === n && y === m) return cnt

      for(let i = 0; i < 4; i++){
          const nx = x + dx[i];
          const ny = y + dy[i];

          if(nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1){
              maps[nx][ny] = 0;
              queue.push([nx, ny, cnt+1]);
          }
      }
  }

  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/154540

function solution(maps) {
  const answer = [];
  const visite = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(true));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y, num) {
    let sum = Number(num);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length) {
        if (visite[nx][ny] && maps[nx][ny] !== 'X') {
          visite[nx][ny] = false;
          sum += DFS(nx, ny, maps[nx][ny]);
        }
      }
    }
    return sum;
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (visite[i][j] && maps[i][j] !== 'X') {
        visite[i][j] = false;
        answer.push(DFS(i, j, maps[i][j]));
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

function solution(maps) {
  const newMap = maps.map(n => n.split(''));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y, num) {
    let sum = Number(num);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < newMap.length && ny < newMap[0].length) {
        if (newMap[nx][ny] !== 'X') {
          const next = newMap[nx][ny];
          newMap[nx][ny] = 'X';
          sum += DFS(nx, ny, next);
        }
      }
    }
    return sum;
  }

  const answer = [];
  for (let i = 0; i < newMap.length; i++) {
    for (let j = 0; j < newMap[0].length; j++) {
      if (newMap[i][j] !== 'X') {
        const start = newMap[i][j];
        newMap[i][j] = 'X';
        answer.push(DFS(i, j, start));
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
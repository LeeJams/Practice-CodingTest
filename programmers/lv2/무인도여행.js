// https://school.programmers.co.kr/learn/courses/30/lessons/154540

function solution(maps) {
  const answer = [];
  const visite = Array.from({length: maps.length}, () => Array(maps[0].length).fill(true));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  
  let sum = 0;
  function DFS(x, y, num){
      sum += Number(num);
      for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length) {
              if(visite[nx][ny] && maps[nx][ny] !== 'X'){
                  visite[nx][ny] = false;
                  DFS(nx, ny, maps[nx][ny]);
              }
          }
      }
      
  }
  
  for(let i = 0; i < maps.length; i++){
      for(let j = 0; j < maps[0].length; j++){
          if(visite[i][j] && maps[i][j] !== 'X') {
              sum = 0;
              visite[i][j] = false;
              DFS(i, j, maps[i][j]);
              answer.push(sum);
          }
      }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
/* 
백트레킹 활용
가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.

예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.

제한사항
퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
n은 12이하의 자연수 입니다.

입출력 예
n	  result
4	  2
*/
function check(queen, row) {
  console.log('check - queen = ', queen)
  console.log('check - row = ', row)
  // 이전까지 두었던 퀸의 위치를 확인한다.
  for (let i = 0; i < row; i += 1) {
      // 행의 위치와 대각선의 위치를 체크한다.
      if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i) {
          return false; // 둘 수 없다면 false
      }
  }

  return true; // 모두 통과되면 true
}
function search(queen, row) {
  const n = queen.length;
  let count = 0;

  if (n === row) { // 체스판 끝에 도달했다면.. 재귀의 탈출 조건
      return 1;
  }

  for (let col = 0; col < n; col += 1) { // 0부터 n까지 열을 돌면 둘 수 있게 만든다.
      queen[row] = col; // 우선 퀸을 둔다
      if (check(queen, row)) { // 퀸을 둘 수 있다면..
        const nu = search(queen, row + 1); // 다음 행으로 이동!
        console.log('count + ', nu)
        count += nu
      }
  }

  return count;
}
function solution(n) {
  return search(Array.from({ length: n }, () => 0), 0);
}

console.log(solution(4));
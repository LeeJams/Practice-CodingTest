//https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  const maxCol = park.length - 1;
  const maxRow = park[0].length - 1;
  let col = park.findIndex((s) => s.includes("S"));
  let row = park[col].indexOf("S");

  routes.forEach((position) => {
    const [d, n] = position.split(" ");
    let tempCol = col;
    let tempRow = row;
    let flag = true;

    for (let i = 0; i < Number(n); i++) {
      if (d === "E") tempRow++;
      else if (d === "W") tempRow--;
      else if (d === "S") tempCol++;
      else if (d === "N") tempCol--;

      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempCol][tempRow] === "X"
      ) {
        flag = false;
        break;
      }
    }

    if (flag) {
      col = tempCol;
      row = tempRow;
    }
  });

  return [col, row];
}

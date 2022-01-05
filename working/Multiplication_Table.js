/* 
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
  const answer = [];
  for(let i = 1; i <= size; i++){
    const arr = [];
    for(let j = 1; j <= size; j++){
      let count = i;
      count *= j;
      arr.push(count);
    }
    answer.push(arr);
  }
  return answer;
}

multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}

const multiplicationTable = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++)
      row.push(i * j);
    res.push(row);
  }
  return res;
}

console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
/* 
  https://www.codewars.com/kata/588e2a1ad1140d31cb00008c/train/javascript
 Pairs_of_integers_from_m_to_n
 
Implement a function that receives two integers m and n and 
generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

Example:

m = 2
n = 4
result = [ [ 2, 2 ], [ 2, 3 ], [ 2, 4 ], [ 3, 3 ], [ 3, 4 ], [ 4, 4 ] ]
*/

function generatePairs(m, n) {
  const result = [];
  for(let i = m; i <= n; i++){
    for(let j = i; j <= n; j++){
      result.push([i, j]);
    }
  }
  return result;
}

console.log(generatePairs(2, 4));
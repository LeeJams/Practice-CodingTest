/* 
  https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

  It should remove all values from list a, which are present in list b keeping their order.

  arrayDiff([1,2],[1]) == [2]
  If a value is present in b, all of its occurrences must be removed from the other:

  arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  if(b.length === 0) return a;
  if(a.length === 0) return [];
  
  const answer = [];
  
  for(let i = 0; i < a.length; i++){
    let check = true;
    for(let j = 0; j < b.length; j++){
      if(a[i] === b[j]){
        check = false;
        break;
      }
    }
    if(check) answer.push(a[i]);
  }
  
  return answer;
}

console.log(arrayDiff([], [4,5])); // []
console.log(arrayDiff([3,4], [3])); // [4]
console.log(arrayDiff([1,8,2], [])); // [1, 8, 2]
console.log(arrayDiff([1,2,3], [1,2])); // [3]

function array_diff_best(a, b) {
  return a.filter(e => !b.includes(e));
}

console.log(array_diff_best([], [4,5])); // []
console.log(array_diff_best([3,4], [3])); // [4]
console.log(array_diff_best([1,8,2], [])); // [1, 8, 2]
console.log(array_diff_best([1,2,3], [1,2])); // [3]
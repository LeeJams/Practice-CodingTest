/* 
  https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript

  Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

  Your function should return true if all elements in the array are square numbers and false if not.

  An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

  Examples:

  is_square([1, 4, 9, 16]) --> true

  is_square([3, 4, 7, 9]) --> false

  is_square([]) --> undefined
*/
var isSquare = function(arr){
  if(arr.length === 0){
    return undefined;
  }
  let answer = true;
  arr.forEach(n => {
    answer = answer && Number.isInteger(Math.pow(n, 1/2));
  })
  return answer;
}

console.log(isSquare([1, 4, 9, 16, 25, 36]));
console.log(isSquare([1, 2, 3, 4, 5, 6]));
console.log(isSquare([]));
console.log(isSquare([1, 2, 4, 15]));
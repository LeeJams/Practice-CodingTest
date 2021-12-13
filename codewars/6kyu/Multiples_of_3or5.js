/* 
  https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

  If we list all the natural numbers below 10 that are multiples of 3 or 5, 
  we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
  Additionally, if the number is negative, return 0 (for languages that do have them).

  Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number){
  if(number < 3) return 0;
  let sum = 0;
  for(let i = 3; i < number; i++){
    if(i%3 === 0 || i%5 === 0){
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10)) // 23
console.log(solution(20)) // 78
console.log(solution(355)) // 29348
console.log(solution(-43)) // 0
console.log(solution(85979)) // 1724887770
console.log(solution(598)) // 83700
console.log(solution(-8)) // 0
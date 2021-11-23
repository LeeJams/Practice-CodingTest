/* 
https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
*/

function zeros (n) {
  let sum = 1;
  for(let i = 2; i <= n; i++){
    sum *= i;
  }
  console.log(sum);
}

console.log(zeros(0)); // 0
console.log(zeros(5)); // 1
console.log(zeros(6)); // 1
console.log(zeros(12)); // 2
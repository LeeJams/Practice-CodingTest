/* 
https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.
*/

function isNarcissistic(n) {
  return n.toString().split('').reduce((acc, cur, idx, arr) => acc + (cur ** arr.length), 0) === n
}

console.log(isNarcissistic(153)) // true
console.log(isNarcissistic(1)) // true
console.log(isNarcissistic(435)) // false
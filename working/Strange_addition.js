/* 
https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

  16
+ 18
-----
  214

  [1]
  [1, 2]
*/

function add(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  const max = Math.max(num1Str.length, num2Str.length);

  const no1 = num1Str.padStart(max, '0').split('');
  const no2 = num2Str.padStart(max, '0').split('');
  
  return parseInt(no1.map((n, idx) => parseInt(n) + parseInt(no2[idx])).join(''));
}

console.log(add(2, 11)); // 13
console.log(add(0, 1)); // 1
console.log(add(16, 18)); // 214
console.log(add(122, 81)); // 1103
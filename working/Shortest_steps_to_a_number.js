/* 
https://www.codewars.com/kata/5cd4aec6abc7260028dcd942

Summary:
Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.

Description:
A step is defined as either:

Adding 1 to the number: num += 1
Doubling the number: num *= 2
You will always start from the number 1 and you will have to return the shortest count of steps it would take to land exactly on that number.

ex)
num == 16 would return 4 steps:

1 -- +1 --> 2:        1 step
2 -- x2 --> 4:        2 steps
4 -- x2 --> 8:        3 steps
8 -- x2 --> 16:       4 steps

4 steps
*/

function shortestStepsToNum(num) {
  let count = 0;
  while(true){
    if(num === 1) break;
    num = Number.isInteger(num/2) ? num / 2 : num - 1;
    count++;
  }
  return count;
}

console.log(shortestStepsToNum(1)); // 0
console.log(shortestStepsToNum(12)); // 4
console.log(shortestStepsToNum(16)); // 4
console.log(shortestStepsToNum(71)); // 9
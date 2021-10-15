/* 
  https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
  You are given an odd-length array of integers, 
  in which all of them are the same, except for one single number.

  Complete the method which accepts such an array, 
  and returns that single different number.

  The input array will always be valid! (odd-length >= 3)
*/

function stray(numbers) {
  const first = numbers.filter((n) => n === numbers[0]);
  const scond = numbers.filter((n) => n !== numbers[0]);
  return first.length === 1 ? first[0] : scond[0];
}
console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3

// 배열이 홀수라는 전제 조건이 붙어 있어 가능한 방식
const stray_best = (nums) => nums.reduce((a, b) => a ^ b);
console.log(stray_best([17, 17, 3, 17, 17, 17, 17])); // 3
// console.log(1 ^ 1);

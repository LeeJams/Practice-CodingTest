/* 
https://leetcode.com/problems/single-number/

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const sortedArr = nums.sort();
  for (let i = 0; i < sortedArr.length; i += 2) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      return sortedArr[i];
    }
  }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
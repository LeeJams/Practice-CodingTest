/* 
https://leetcode.com/problems/running-sum-of-1d-array/

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce(
    (acc, cur, idx) => {
      if (idx) {
        acc.push(acc[idx - 1] + cur);
      }
      return acc;
    },
    [nums[0]]
  );
};
var runningSum = function (nums) { 
  let val = 0
  return nums.map(res=>{
      return val = res + val
  })
 };

console.log(runningSum([1, 2, 3, 4]));

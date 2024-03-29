/* 
Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let i = 0;
  let j = 0;
  let temp = "";
  const len = strs[0].length - 1;

  while (i < strs.length) {
    if (strs[i] === "") return "";
    if (temp && temp !== strs[i][j]) break;
    temp = strs[i][j];

    i++;

    if (i === strs.length) {
      result += temp;
      temp = "";
      if (j < len) {
        j++;
        i = 0;
      }
    }
  }
  return result;
};

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++)
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix([""]));
// console.log(longestCommonPrefix(["ab", "a"]));

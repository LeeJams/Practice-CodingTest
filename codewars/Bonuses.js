/* 
  https://www.codewars.com/kata/5d68d05e7a60ba002b0053f6/train/javascript

  John wants to give a total bonus of $851 to his three employees taking fairly as possible 
  into account their number of days of absence during the period under consideration. 
  Employee A was absent 18 days, B 15 days, and C 12 days.

  The more absences, the lower the bonus ...

  How much should each employee receive? 
  John thinks A should receive $230, B $276, C $345 
  since 230 * 18 = 276 * 15 = 345 * 12 and 230 + 276 + 345 = 851.

  Task:
  Given an array arr (numbers of days of absence for each employee) 
  and a number s (total bonus) the function bonus(arr, s) will follow John's way 
  and return an array of the fair bonuses of all employees 
  in the same order as their numbers of days of absences.

  s and all elements of arr are positive integers.

  Examples:
  bonus([18, 15, 12], 851) -> [230, 276, 345]

  bonus([30, 27, 8, 14, 7], 34067) -> [2772, 3080, 10395, 5940, 11880]
  Notes
  There are only integers in the kata so no need to use floats.
  See Example Test Cases for more examples.
  Please ask before translating.
  In some tests the number of elements of arr can be big.
*/

bonus = function(arr, s) {
  // Your code
}

console.log([22, 3, 15], 18228); // [1860, 13640, 2728]
console.log([8, 14, 11], 23541); // [10241, 5852, 7448]
console.log([25, 22, 15, 22, 22], 5213); // [858, 975, 1430, 975, 975]
console.log([10, 11, 30, 12, 17, 23, 30, 11, 17, 10], 1788210); // [258060, 234600, 86020, 215050, 151800, 112200, 86020, 234600, 151800, 258060]
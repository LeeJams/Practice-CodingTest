/* 
https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
 */

var FilterString = function (value) {
  const num = value.split("").reduce((acc, cur) => {
    if (parseInt(cur) || parseInt(cur) === 0) {
      return acc += parseInt(cur);
    }else return acc
  }, '');
  return parseInt(num);
};

console.log(FilterString("123"));
console.log(FilterString("a1b2c3"));
console.log(FilterString("aa1bb2cc3dd"));


var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}
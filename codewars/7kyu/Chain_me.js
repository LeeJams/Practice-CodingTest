/* 
https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). 
Return the final value after execution is complete.
*/
function add(x) {
  return x + 10;
}

function mult(x) {
  return x * 30;
}

function chain(input, fs) {
  let result = input;
  fs.forEach((n) => {
    result = n(result);
  });
  return result;
}

function chain_best(input, fs) {
  return fs.reduce((acc, cur) => cur(acc), input);
}

console.log(chain_best(2, [add, mult])); // 360

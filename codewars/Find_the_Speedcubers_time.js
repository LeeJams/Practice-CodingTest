/* 
  https://www.codewars.com/kata/5d7c7697e8ad48001e642964/train/javascript

  Speedcubing is the hobby involving solving a variety of twisty puzzles, 
  the most famous being the 3x3x3 puzzle or Rubik's Cube, as quickly as possible.

  In the majority of Speedcubing competitions, a Cuber solves a scrambled cube 5 times, 
  and their result is found by taking the average of the middle 3 solves 
  (ie. the slowest and fastest times are disregarded, and an average is taken of the remaining times).

  In some competitions, the unlikely event of a tie situation is resolved by comparing Cuber's fastest times.

  Write a function cube_times(times) that, given an array of floats times returns an array / 
  tuple with the Cuber's result (to 2 decimal places) AND their fastest solve.

  For example:

  cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1]) = [9.37, 7.6]
  // Because (9.5 + 10.5 + 8.1) / 3 = 9.37 and 7.6 was the fastest solve.
*/

function cubeTimes(times) {
  const max = Math.max(...times);
  const min = Math.min(...times);
  
  const avg = Math.round(times.filter(n => n !== max && n !== min).reduce((acc, cur) => acc + cur) / 3 * 100) / 100;
  
  return [avg, min];
}

console.log(cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1])); // [9.37, 7.6]
console.log(cubeTimes([13.4, 12.3, 9.5, 11.9, 20.8])); // [12.53, 9.5]
console.log(cubeTimes([28.3, 14.5, 17.3, 8.9, 10.1])); // [13.97, 8.9]

function cubeTimes_best(times) {
  return [+(times.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0) / 3).toFixed(2), Math.min(...times)]
}

console.log(cubeTimes_best([9.5, 7.6, 11.4, 10.5, 8.1])); // [9.37, 7.6]
console.log(cubeTimes_best([13.4, 12.3, 9.5, 11.9, 20.8])); // [12.53, 9.5]
console.log(cubeTimes_best([28.3, 14.5, 17.3, 8.9, 10.1])); // [13.97, 8.9]

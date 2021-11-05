/* 
https://www.codewars.com/kata/5551dc71101b2cf599000023/train/javascript

In her trip to Italy, Elizabeth Gilbert made it her duty to eat perfect pizza. One day she ordered one for dinner, 
and then some Italian friends appeared at her room. The problem is that there were many people who ask for a piece of pizza at that moment, and she had a knife that only cuts straight.

Given the number of pizza cuts, find the maximum amount of pieces of pizza that you can get (not necessarily of equal size). 
If the number of cuts is negative, return -1 instead (or Nothing in Haskell).
*/

function maxPizza(cut) {
  if(!cut) return 1;
  if(cut < 0) return -1;
  let answer = 0;
  for(let i = 1; i < cut + 1; i++){
    answer += i;
  }
  return 1 + answer;
}

console.log(maxPizza(0)) // 1
console.log(maxPizza(3)) // 7
console.log(maxPizza(10)) // 56
console.log(maxPizza(24)) // 301
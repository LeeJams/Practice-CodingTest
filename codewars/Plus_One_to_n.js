/* 
  https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript
  Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. 
  Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, 
  while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

  Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; 
  so, he can astonish his teacher and rescue his recreation interval.

  Here's, an example:
*/

function f(n){
  console.log(n !== parseInt(n))
  if(typeof n !== 'number' || n !== parseInt(n)){
    return false;
  }
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  }
  return sum ? sum : false;
};

console.log(f(100)) // 5050
console.log(f(300)) // 45150
console.log(f(50000)) // 1250025000
console.log(f('n')) // false
console.log(f()) // false
console.log(f(3.14)) // false
console.log(f(-10)) // false
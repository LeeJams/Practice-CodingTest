/* 
https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. 
Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
*/

/* function isPrime(num) {
  if(num < 2) return false;
  for(let i = 3; i < Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
} */
function isPrime(num) {
  if(num < 2) return false;
  const arr = [0, 0];
  for (let i = 2; i <= num; i++) {
    arr.push(i);
  }

  for (let i = 2; i <= num; i++) {
    if (arr[i] == 0) continue;
    for (let j = i + i; j <= num; j += i) {
      arr[j] = 0;
    }
  }

  return arr.includes(num);
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(5099));
console.log(isPrime(9));
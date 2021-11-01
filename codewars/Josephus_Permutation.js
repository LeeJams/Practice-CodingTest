/* 
  https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript

  This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: 
  according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

  Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: 
  they formed a circle and proceeded to kill one man every three, 
  until one last man was left (and that it was supposed to kill himself to end the act).

  Well, Josephus and another man were the last two and, as we now know every detail of the story, 
  you may have correctly guessed that they didn't exactly follow through the original idea.

  You are now to create a function that returns a Josephus permutation, 
  taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

  Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

  For example, with n=7 and k=3 josephus(7,3) should act this way.

  [1,2,3,4,5,6,7] - initial sequence
  [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
  [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
  [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
  [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
  [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
  [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
  [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
*/

function josephus(items, k) {
  if (k === 1 || items.length === 0) return items;
  let count = 0;
  let idx = 0;
  const answer = [];
  while (items.length) {
    idx %= items.length;
    if(++count === k) {
      answer.push(items.splice(idx, 1)[0]);
      count = 0;
      idx--;
    }
    idx++;
  }
  return answer
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // [1,2,3,4,5,6,7,8,9,10]
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)); // ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
console.log(josephus([], 3)); // []
console.log(josephus([1,2,3,4,5,6,7],3)); // [3, 6, 2, 7, 5, 1, 4]
[8, 16, 24, 5, 14, 23, 6, 17, 27, 11, 22, 9, 21, 10, 26, 15, 4, 1, 20, 19, 25, 3, 13, 12, 2, 18, 7]
console.log(
  josephus(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27,
    ],
    8
  )
);

/* 
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  const answer = [];
  for (let i = 0; i < nFloors; i++) {
    const start = "*".repeat(1 + i * 2);
    const blank = " ".repeat(nFloors - (i + 1));
    answer.push(`${blank}${start}${blank}`);
  }
  return answer;
}

console.log(towerBuilder(1)); // ["*"]
console.log(towerBuilder(2)); // [" * ","***"]
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
console.log(towerBuilder(4)); // ["   *   ","  ***  "," ***** ", "*******"]

/* 
  https://www.codewars.com/kata/5a626fc7fd56cb63c300008c/train/javascript
  Uncollapse Digits

  Task
  You will be given a string of English digits "stuck" together, like this:

  "zeronineoneoneeighttwoseventhreesixfourtwofive"

  Your task is to split the string into separate digits:

  "zero nine one one eight two seven three six four two five"

  Examples
  "three"              -->  "three"
  "eightsix"           -->  "eight six"
  "fivefourseven"      -->  "five four seven"
  "ninethreesixthree"  -->  "nine three six three"
  "fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
*/

function uncollapse(digits){
  return digits.match(/(one|two|three|four|five|six|seven|eight|nine|zero)/g).join(" ");
}

console.log(uncollapse('three'));
console.log(uncollapse('eightsix'));
console.log(uncollapse('fivefourseven'));
console.log(uncollapse('ninethreesixthree'));
console.log(uncollapse('foursixeighttwofive'));
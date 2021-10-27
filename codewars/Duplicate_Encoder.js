/* 
  https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

  The goal of this exercise is to convert a string to a new string where each character 
  in the new string is "(" if that character appears only once in the original string, or ")" 
  if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 
*/

//map을 이용한 방식
function duplicateEncode_map(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

//정규식 이용 - 성능 압도적....
function duplicateEncode_exr(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .reduce((acc, cur, idx, arr) => {
      return (acc += arr.filter((n) => n === cur).length > 1 ? ")" : "(");
    }, "");
}

console.time('check');
console.log(duplicateEncode("din"));
console.timeEnd('check');

console.time('check-map');
console.log(duplicateEncode_map("din"));
console.timeEnd('check-map');

console.time('check-reg');
console.log(duplicateEncode_exr("din"));
console.timeEnd('check-reg');

console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));

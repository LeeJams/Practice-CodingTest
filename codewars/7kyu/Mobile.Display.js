/* 
https://www.codewars.com/kata/59564a286e595346de000079/train/javascript

Mobile Display Keystrokes

Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how much keystrokes you have to do for a specific word.

This is the layout:


Return the amount of keystrokes of input str 
(! only letters, digits and special characters in lowercase included in layout without whitespaces !)

*/

function mobileKeyboard(str) {
  const first = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "#", "*"];
  const scond = ["a", "d", "g", "j", "m", "p", "t", "w"];
  const third = ["b", "e", "h", "k", "n", "q", "u", "x"];
  const fourth = ["c", "f", "i", "l", "o", "r", "v", "y"];
  const fifth = ["s", "z"];

  return str.split("").reduce((acc, cur) => {
    return (
      acc +
      (first.includes(cur)
        ? 1
        : scond.includes(cur)
        ? 2
        : third.includes(cur)
        ? 3
        : fourth.includes(cur)
        ? 4
        : fifth.includes(cur)
        ? 5
        : 0)
    );
  }, 0);
}

console.log(mobileKeyboard("")); // 0
console.log(mobileKeyboard("codewars")); // 26
console.log(mobileKeyboard("longwordwhichdontreallymakessense")); // 107


const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']

function mobileKeyboard_best(str){
  return [...str].reduce((s,c)=>s+map.findIndex(l=>l.includes(c)),str.length);
}

console.log(mobileKeyboard_best("")); // 0
console.log(mobileKeyboard_best("codewars")); // 26
console.log(mobileKeyboard_best("longwordwhichdontreallymakessense")); // 107
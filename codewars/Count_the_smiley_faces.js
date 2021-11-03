/* 
  https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

  Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

  Rules for a smiling face:

  Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
  A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  Every smiling face must have a smiling mouth that should be marked with either ) or D
  No additional characters are allowed except for those mentioned.

  Valid smiley face examples: :) :D ;-D :~)
  Invalid smiley faces: ;( :> :} :]

  Example
  countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
  countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
  countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
  Note
  In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
  Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (!arr.length) return 0;
  let answer = 0;
  arr.forEach((n) => {
    const face = n.split("");
    if (face.length === 3) {
      if (
        (face[0] === ":" || face[0] === ";") &&
        (face[1] === "-" || face[1] === "~") &&
        (face[2] === "D" || face[2] === ")")
      )
        answer++;
    } else if (face.length === 2) {
      if (
        (face[0] === ":" || face[0] === ";") &&
        (face[1] === "D" || face[1] === ")")
      )
        answer++;
    }
  });
  return answer;
}

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([])); // 0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); // 4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); // 2
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // 1

console.log(/^[:;][-~]?[)D]$/.test(';D'))
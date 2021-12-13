/* 
  https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript

  You are given a string of letters and an array of numbers.
  The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
  After each removal the size of the string decreases (there is no empty space).
  Return the only letter left.

  Example:

  let str = "zbk", arr = [0, 1]
      str = "bk", arr = [1]
      str = "b", arr = []
      return 'b'

  The given string will never be empty.
  The length of the array is always one less than the length of the string.
  All numbers are valid.
  There can be duplicate letters and numbers.
*/

function lastSurvivor(letters, coords) {
  let result = letters;
  coords.forEach((n) => {
    result = "";
    result += letters.slice(0, n);
    result += letters.slice(n + 1);

    letters = result;
  });
  return result;
}

console.log(lastSurvivor("abc", [1, 1])); // a
console.log(lastSurvivor("kbc", [0, 1])); // b
console.log(lastSurvivor("zbk", [2, 1])); // z
console.log(lastSurvivor("c", [])); // c

function lastSurvivor(string, indices) {
  const arr = [...string];
  for (const i of indices) arr.splice(i, 1);
  return arr[0];
}

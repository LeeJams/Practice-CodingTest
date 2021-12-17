/* 
https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left,right){
  let leftVal = 0;
  let rightVal = 0;
  left.split('').forEach(n => {
    leftVal += n === '!' ? 2 : 3;
  });
  right.split('').forEach(n => {
    rightVal += n === '!' ? 2 : 3;
  });
  
  return leftVal === rightVal ? 'Balance' : leftVal > rightVal ? 'Left' : 'Right';
}
function balance_best(left,right){
  let leftVal = [...left].reduce((acc, cur) => acc + (cur === '!' ? 2 : 3), 0);
  let rightVal = [...right].reduce((acc, cur) => acc + (cur === '!' ? 2 : 3), 0);
  
  return leftVal === rightVal ? 'Balance' : leftVal > rightVal ? 'Left' : 'Right';
}

console.log(balance_best("!!","??")); // Right
console.log(balance_best("!??","?!!")); // Left
console.log(balance_best("!?!!","?!?")); // Left
console.log(balance_best("!!???!????","??!!?!!!!!!!")); // Balance
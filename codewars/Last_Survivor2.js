/* 
  https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript

  Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

  "aa" => "b", "bb" => "c", .. "zz" => "a".
  The equal letters do not have to be adjacent.
  Repeat this operation until there are no possible substitutions left.
  Return a string.

  Example:
    let str = "zzzab"
        str = "azab"
        str = "bzb"
        str = "cz"
    return "cz"
*/

function lastSurvivors(str) {
  const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
  const arr = str.split('');
  alp.forEach(n => {
    console.log(arr.filter(m => m === n).length);
  })
}

console.log(lastSurvivors("zzzab"));
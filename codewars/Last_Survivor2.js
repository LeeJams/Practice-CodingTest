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

  재귀가 필요..
*/

function lastSurvivors(str) {
  // console.log('str = ', str);
  const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
  let overlap = [];
  let remain = [];
  let idx = -1;
  const arr = str.split('')
  for(let i = 0; i < arr.length; i++){
    overlap = arr.filter(n => n === arr[i]);
    remain = arr.filter(n => n !== arr[i]);

    if(overlap.length > 1){
      idx = alp.indexOf(overlap[0]);
      break
    }
  }
  
  if(idx >= 0){
    const deleteOverlap = [];
    const num = Math.floor(overlap.length / 2);
    const re = overlap.length % 2;
    for(let i = 0; i < num; i++){
      deleteOverlap.push(alp[idx !== 25 ? idx + 1 : 0]);
    }
    for(let i = 0; i < re; i++){
      deleteOverlap.push(alp[idx]);
    }
    const newStr = [...deleteOverlap, ...remain].join("");
    // console.log(newStr);
    return lastSurvivors(newStr);
  }
  return str;
}

console.log(lastSurvivors("xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh"));

function lastSurvivors_best(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let next = str;
  do {
    str = next;
    console.log('next = ', next)
    console.log('str = ', str)
    next = str.replace(/([a-z])(.*?)\1/g, (_, a, b) => alpha[(alpha.indexOf(a) + 1) % 26] + b);
    console.log('next = ', next)
    console.log('str = ', str)
  } while (str !== next)
  
  return str;
}
console.log(lastSurvivors_best("zzzab"));

// function recursive(str) {
//   const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
//   let overlap = [];
//   let remain = [];
//   let idx = -1;
//   const arr = str.split('')
//   for(let i = 0; i < arr.length; i++){
//     overlap = arr.filter(n => n === arr[i]);
//     remain = arr.filter(n => n !== arr[i]);

//     if(overlap.length > 1){
//       idx = alp.indexOf(overlap[0]);
//       break
//     }
//   }
  
//   if(idx >= 0){
//     const deleteOverlap = [];
//     const num = Math.floor(overlap.length / 2);
//     const re = overlap.length % 2;
//     for(let i = 0; i < num; i++){
//       deleteOverlap.push(alp[idx !== 25 ? idx + 1 : 0]);
//     }
//     for(let i = 0; i < re; i++){
//       deleteOverlap.push(alp[idx]);
//     }
//     const answer = [...deleteOverlap, ...remain].join("");
//     console.log(answer);
//     recursive(answer);
//   }
// }
function solution(s, skip, index) {
  let answer ="";
  const skipNum = skip.split("").map(c => c.charCodeAt(0));
  console.log("skipNum = ", skipNum);
  for(let i = 0; i < s.length; i++){
      const code = s.charCodeAt(i);
      let plusCode = code + index;
      plusCode += skipNum.filter(n => n > code && n <= plusCode).length;
      if(plusCode > 122){
        plusCode -= 26;
        plusCode += skipNum.filter(n => n <= plusCode).length;
        while(skipNum.includes(plusCode)){
          plusCode++;
        }
      }
      answer += String.fromCharCode(plusCode);
  }
  return answer;
}

function solution(s, skip, index) {
  const al = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'a', 'b', 'c', 'd', 
  'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z'
  ]
  let answer ="";
  
  for(let c of s){
      let idx = al.indexOf(c);
      let i = 0;
      while(i !== index){
          if(!skip.includes(al[++idx])) i++;
      }
      answer += al[idx];
  }
  return answer;
}

function solution (s, skip, index) {
  let ans = '';
  const regex = new RegExp(`[^${skip}]`, 'g');
  const matched = 'abcdefghijklmnopqrstuvwxyz'.match(regex);
  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx % matched.length];
  }
  return ans;
};

console.log(solution("uvwxy", "zab", 5)); // "cdefg"
console.log(solution("z", "abcdefghij", 20)); // "n"

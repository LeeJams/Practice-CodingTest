function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  const length = upper.length;

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let position = upper.includes(s[i])
      ? upper
      : lower.includes(s[i])
      ? lower
      : null;
    if (position) {
      const idx = position.indexOf(s[i]) + n;
      answer += idx >= length ? position[idx - length] : position[idx];
    } else {
      answer += " ";
    }
  }
  return answer;
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"

// https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  let answer = Number.MAX_SAFE_INTEGER;
  const ch = [];
  function dfs(s, sum){
      if(s === target) answer = Math.min(sum, answer);
      else{
          outer:for(let i = 0; i < words.length; i++){
              let cnt = 0;
              for(let j = 0; j < words[i].length; j++){
                  if(s[j] !== words[i][j]) cnt++;
              }
              if(cnt !== 1) continue outer;
              if(!ch[i]){
                  ch[i] = 1;
                  dfs(words[i], sum+1)
                  ch[i] = 0;
              }
          }
      }
  }
  dfs(begin, 0);
  
  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
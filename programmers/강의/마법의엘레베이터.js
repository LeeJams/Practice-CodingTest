function solution(number) {
  let answer = 0;

  const str = number.toString();
  let help = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    const num = Number(str[i]) + help;
    help = 0;
    if (num > 5) {
      answer += 10 - num;
      help = 1;
    } else if (num === 5 && i > 0) {
      if (Number(str[i - 1]) >= 5) {
        answer += 5;
        help = 1;
      } else {
        answer += num;
      }
    } else {
      answer += num;
    }
  }

  if (help > 0) answer += help;
  return answer;
}

function solution(storey) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (num, counter) => {
    if (counter >= answer) return;
    if (num === 0) {
      answer = counter;
      return;
    }

    let res = num % 10;

    dfs((num - res) / 10, counter + res);
    dfs((num - res) / 10 + 1, counter + 10 - res);
  };

  dfs(storey, 0);
  return answer;
}

console.log(solution(16)); // 6
console.log(solution(2554)); // 16
console.log(solution(2664)); // 14
console.log(solution(0)); // 0
console.log(solution(6)); // 5

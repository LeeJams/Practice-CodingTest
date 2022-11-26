// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  const honor = [];
  const answer = [];

  score.forEach((n) => {
    honor.push(n);
    honor.sort((a, b) => b - a);

    if (honor.length >= k) {
      answer.push(honor[k - 1]);
    } else {
      answer.push(honor[honor.length - 1]);
    }
  });

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));

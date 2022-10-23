// B가 A를 이길수 있는 최적
function solution(numsA, numsB) {
  numsA.sort();
  numsB.sort();

  let answer = 0,
    start = 0,
    position = 0;

  while (start < numsB.length && position < numsA.length) {
    if (numsA[position] < numsB[start]) {
      answer++;
      start++;
      position++;
    } else {
      start++;
    }
  }

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0

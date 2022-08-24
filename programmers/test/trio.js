// 조합을 이용해 어느 3가지 수의 합이 0인 것을 찾아라
// 100 / 100

function solution(number) {
  const combination = (i, arr) => {
    const com = [];
    if (i === 1) return arr.map((el) => [el]);

    arr.forEach((n, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = combination(i - 1, rest);
      const attached = combinations.map((m) => [n, ...m]);
      com.push(...attached);
    });
    return com;
  };

  const combis = combination(3, number);

  let result = 0;
  combis.forEach((n) => {
    const sum = n.reduce((acc, cur) => acc + cur, 0);
    if (sum === 0) result++;
  });

  return result;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
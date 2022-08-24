function solution(X, Y) {
  const xCheck = X.split("").reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  const yCheck = Y.split("").reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  const nums = [];
  for (let num in xCheck) {
    if (xCheck[num] && yCheck[num]) {
      const min = Math.min(xCheck[num], yCheck[num]);
      for (let i = 0; i < min; i++) {
        nums.push(num);
      }
    }
  }
  const result = parseInt(nums.sort((a, b) => b - a).join("")) + "";
  return nums.length ? result : "-1";
}

console.log(solution("100", "2345"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "125555"));
console.log(solution("100", "203045"));
console.log(solution("1091283900", "01928381278931273890"));
console.log(solution("10000", "2000000"));
/* 

47.4 / 100

이유를 모르겠음...
*/
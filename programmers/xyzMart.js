function solution(want, number, discount) {
  const loopNum = discount.length - 10;

  const wantObj = want.reduce((acc, cur, idx) => {
    acc[cur] = number[idx];
    return acc;
  }, {});
  let result = 0;

  for (let i = 0; i <= loopNum; i++) {
    const obj = Object.assign({}, wantObj);

    for (let j = i; j < i + 10; j++) {
      if (obj[discount[j]]) {
        obj[discount[j]]--;
      }
    }
    let check = 0;
    for (let item in obj) {
      check += obj[item];
    }
    if (!check) result++;
  }
  return result;
}

/* 
100 / 100

정답
*/

console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);

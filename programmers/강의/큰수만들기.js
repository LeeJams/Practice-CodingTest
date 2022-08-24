/* 
그리디 - 탐욕법을 활용한 문제

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 
이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. 
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.

입출력 예
number	      k	    return
"1924"	      2	    "94"
"1231234"	    3	    "3234"
"4177252841"	4	    "775841"
*/
function solution(number, k) {
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
  const combis = combination(number.length - k, number.split(""));
  return combis
    .map((n) => n.join(""))
    .reduce((acc, cur) => Math.max(acc, Number(cur)), 0)
    .toString();
}
// ↑ 런타임 오류. 시간복잡도를 줄여야함

// 큰 값이 나오면 이전 값 중 더 작은 값은 전부 삭제한다.
// 즉, 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열이 되어야한다.
function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}
console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"

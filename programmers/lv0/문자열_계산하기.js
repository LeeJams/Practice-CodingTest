/* 
https://school.programmers.co.kr/learn/courses/30/lessons/120902

문제 설명
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

제한사항
연산자는 +, -만 존재합니다.
문자열의 시작과 끝에는 공백이 없습니다.
0으로 시작하는 숫자는 주어지지 않습니다.
잘못된 수식은 주어지지 않습니다.
1 ≤ my_string의 길이 ≤ 100
my_string을 계산한 결과 값은 -100,000 이상 100,000 이하입니다.
return type 은 정수형입니다.
my_string의 숫자와 기호 사이에는 공백이 있습니다.
입출력 예
my_string	result
"3 + 4"	7
*/

function solution(my_string) {
  const arr = my_string.split(" ");
  const nums = [arr[0]];

  for (let i = 2; i < arr.length; i += 2) {
    if (arr[i - 1] === "+") {
      nums.push(arr[i]);
    } else {
      if (arr[i].includes("-")) {
        nums.push(arr[i].substring(1));
      } else {
        nums.push("-" + arr[i]);
      }
    }
  }
  return nums.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
}

console.log(solution("123 - -123"));

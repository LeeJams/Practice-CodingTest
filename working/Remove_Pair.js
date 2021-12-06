/* 
https://programmers.co.kr/learn/courses/30/lessons/12973
짝지어 제거하기

문제 설명
짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 
먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 
이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 
문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 
성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa → 의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

제한사항
문자열의 길이 : 1,000,000이하의 자연수
문자열은 모두 소문자로 이루어져 있습니다.
*/

// 성능 개선 필요 - 답은 나옴
/* function solution(s) {
  const reg = new RegExp(
    /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/g
  );
  const newOne = s.replace(reg, "");
  if (s === newOne) {
    return 0;
  } else if (newOne.length === 0) {
    return 1;
  } else {
    return solution(newOne);
  }
} */

/* function solution(s) {
  const reg = new RegExp(
    /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/g
  );

  while(true){
    const newOne = s.replace(reg, "");
    if (s === newOne) {
      return 0;
    } else if (newOne.length === 0) {
      return 1;
    } else {
      s = newOne;
    }
  }
} */
function solution(s) {
  //문자열이 홀수면 0
  if (s.length % 2 != 0) return 0;

  const answer = [];
  const a = [...s];

  for (let i = 0; i < a.length; i++) {
    //문자 비교
    if (a[i] == answer[answer.length - 1]) {
      answer.pop();
      continue;
    }

    //문자 입력
    answer.push(a[i]);

    //남은 문자의 개수가 현재까지 입력된 개수보다 적으면 0
    if (a.length - i < answer.length) return 0;
  }

  return 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));

console.time("계산시간은 얼마나 걸릴까?");
console.log(solution("abcdefggfedcba"));
console.timeEnd("계산시간은 얼마나 걸릴까?");

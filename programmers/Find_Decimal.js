/* 
  https://programmers.co.kr/learn/courses/30/lessons/12921

  1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)

  제한 조건
  n은 2이상 1000000이하의 자연수입니다.
  입출력 예
  n	    result
  10	  4
  5	    3
*/

// 효율성 탈락
/* function solution(n) {
  let answer = 0;
  
  for(let i = 2; i <= n; i++){
      let test = true;
      for(let j = 2; j*j <= i; j++){
          if(i % 2 === 0 || i % j === 0){
              test = false;
              break;
          }
      }
      if(test){
          answer++;
      }
  }
  return answer;
} */

function solution_my(n) {
  const arr = [0, 0];
  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] == 0) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((n) => n !== 0).length;
}

//Set을 생성하면서 2의 배수는 삭제 제곱근을 구해 나머지도 삭제... 지린다...
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

console.time("solution");
console.log(solution(16));
console.timeEnd("solution");

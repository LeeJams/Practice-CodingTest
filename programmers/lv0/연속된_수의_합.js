/* 
https://school.programmers.co.kr/learn/courses/30/lessons/120923

연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 
두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 
정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

입출력 예
num	  total	    result
3	    12	      [3, 4, 5]
5	    15	      [1, 2, 3, 4, 5]
4	    14	      [2, 3, 4, 5]
*/
function solution(num, total) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
      sum += i;
  }
  let left = 1;
  let right = num;

  while(sum !== total){
      right++;
      sum += right;
      sum -= left;
      left++;
  }
  
  return Array.from({length: num}, (_, i) => i + left);
}

console.log(solution(3, 1002));
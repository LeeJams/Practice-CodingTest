/* 
https://programmers.co.kr/learn/courses/30/lessons/67256

[카카오 인턴] 키패드 누르기

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
  "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

입출력 예

numbers	                            hand	      result
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	  "right"	    "LRLLLRLLRRL"
[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	  "left"	    "LRLLRRLLLRR"
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	    "right"	    "LLRLLRLLRL"
*/

function solution(numbers, hand) {
  const right = [3, 6, 9, "#"];
  const middle = [2, 5, 8, 0];
  const left = [1, 4, 7, "*"];

  let answer = "";
  let nowLeft = "*";
  let nowRight = "#";

  let leftPo, rightPo;

  numbers.forEach((n) => {
    if (left.includes(n)) {
      nowLeft = n;
      answer += "L";
    } else if (right.includes(n)) {
      nowRight = n;
      answer += "R";
    } else {
      if (middle.includes(nowLeft) && middle.includes(nowRight)) {
        leftPo = Math.abs(middle.indexOf(n) - middle.indexOf(nowLeft));
        rightPo = Math.abs(middle.indexOf(n) - middle.indexOf(nowRight));
      } else if (middle.includes(nowLeft)) {
        leftPo = Math.abs(middle.indexOf(n) - middle.indexOf(nowLeft)) - 1;
        rightPo =
          Math.abs(middle.indexOf(n) - right.indexOf(nowRight));
      } else if (middle.includes(nowRight)) {
        leftPo = Math.abs(middle.indexOf(n) - left.indexOf(nowLeft));
        rightPo =
          Math.abs(middle.indexOf(n) - middle.indexOf(nowRight)) - 1;
      } else {
        leftPo = Math.abs(middle.indexOf(n) - left.indexOf(nowLeft));
        rightPo = Math.abs(middle.indexOf(n) - right.indexOf(nowRight));
      }

      if (leftPo === rightPo) {
        if (hand === "right") {
          nowRight = n;
          answer += "R";
        } else {
          nowLeft = n;
          answer += "L";
        }
      } else if (leftPo > rightPo) {
        nowRight = n;
        answer += "R";
      } else {
        nowLeft = n;
        answer += "L";
      }
    }
  });
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //	"LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"

const solution_best = (numbers, hand) => {
  const answer = [];

  let leftHandPosition = '*';
  let rightHandPosition = '#';

  numbers.forEach(number => {   
    if (number === 1 || number === 4 || number === 7) {
      answer.push('L');
      leftHandPosition = number;
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      answer.push('R');
      rightHandPosition = number;
      return;
    }

    const leftHandDistance = getDistance(leftHandPosition, number);
    const rightHandDistance = getDistance(rightHandPosition, number);

    if (leftHandDistance === rightHandDistance) {
      if (hand === "right") {
        answer.push('R');
        rightHandPosition = number;
        return;
      }

      if (hand === 'left') {
        answer.push('L');
        leftHandPosition = number;
        return;
      }
    }

    if (leftHandDistance > rightHandDistance) {
      answer.push('R');
      rightHandPosition = number;
    } 

    if (leftHandDistance < rightHandDistance) {
      answer.push('L');
      leftHandPosition = number;
    }
  });

  return answer.join("");
};

const getDistance = (locatedNumber, target) => {
  const keyPad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  }

  const nowPosition = keyPad[locatedNumber];
  const targetPosition = keyPad[target];

  return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};

console.log(solution_best([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //	"LRLLLRLLRRL"
console.log(solution_best([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution_best([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"


//그리드..?
function solution_grid(numbers, hand) {
    let answer = '';
    // imagine a grid, and assign each number coordinates
    // by taking 5 being 0,0.
    // If needed, this can also be done programmatically.
    const grid = [[0,-2], [-1,1], [0,1],
                  [1,1], [-1,0], [0,0],
                  [1,0], [-1,-1], [0,-1],
                  [1,-1], [-1,-2], [1,-2]];
    let L = 10; // 10th element of the grid are * and # of the keypad
    let R = 11; // 11th
    let L_steps, R_steps; 
    hand = hand[0].toUpperCase();
    numbers.forEach(el => {
        switch (grid[el][0]){
            case -1:
                answer += "L";
                L = el;
                break;
            case 1:
                answer += "R";
                R = el;
                break;
            case 0:
                L_steps = Math.abs(grid[L][0] - grid[el][0]) + Math.abs(grid[L][1] - grid[el][1]);
                R_steps = Math.abs(grid[R][0] - grid[el][0]) + Math.abs(grid[R][1] - grid[el][1]);
                if(L_steps > R_steps){
                    answer += "R";
                    R = el;
                } else if (L_steps < R_steps){
                    answer += "L";
                    L = el;
                } else {
                    answer += hand;
                    eval(`${hand} = el`); //may affect performance?
                }
        }
    });
    return answer;
}
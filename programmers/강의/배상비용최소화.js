/* 
힙 관련문제
https://school.programmers.co.kr/learn/courses/13213/lessons/91086

문제 설명
OO 조선소에서는 태풍으로 인한 작업지연으로 수주한 선박들을 기한 내에 완성하지 못할 것이 예상됩니다. 
기한 내에 완성하지 못하면 손해 배상을 해야 하므로 남은 일의 작업량을 숫자로 매기고 배상비용을 최소화하는 방법을 찾으려고 합니다.
배상 비용은 각 선박의 완성까지 남은 일의 작업량을 제곱하여 모두 더한 값이 됩니다.

조선소에서는 1시간 동안 남은 일 중 하나를 골라 작업량 1만큼 처리할 수 있습니다. 
조선소에서 작업할 수 있는 N 시간과 각 일에 대한 작업량이 담긴 배열(works)이 있을 때 배상 비용을 최소화한 결과를 반환하는 함수를 만들어 주세요. 

예를 들어, N=4일 때, 선박별로 남은 일의 작업량이 works = [4, 3, 3]이라면 
배상 비용을 최소화하기 위해 일을 한 결과는 [2, 2, 2]가 되고 배상 비용은 22 + 22 + 22 = 12가 되어 12를 반환해 줍니다.

제한사항
일할 수 있는 시간 N : 1,000,000 이하의 자연수
배열 works의 크기 : 1,000 이하의 자연수
각 일에 대한 작업량 : 1,000 이하의 자연수

입출력 예
N	  works	    result
4	  [4,3,3]	  12
2	  [3,3,3]	  17
*/

class Heap {
  constructor() {
    this.val = [];
  }

  insert(val) {
    this.val.push(val);

    let idx = this.val.length - 1;
    const element = this.val[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.val[parentIdx];
      if (element <= parent) break;
      this.val[parentIdx] = element;
      this.val[idx] = parent;
      idx = parentIdx;
    }
  }

  remove() {
    if (!this.val.length) return undefined;

    const max = this.val[0];
    const end = this.val.pop();
    if (this.val.length > 0) {
      this.val[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const element = this.val[0];
    while (true) {
      const leftIdx = idx * 2 + 1;
      const leftVal = this.val[idx * 2 + 1];
      const rightIdx = idx * 2 + 2;
      const rightVal = this.val[idx * 2 + 2];

      if (element < leftVal && element < rightVal) {
        const maxIdx = leftVal > rightVal ? leftIdx : rightIdx;
        this.val[idx] = this.val[maxIdx];
        this.val[maxIdx] = element;
        idx = maxIdx;
      } else if (element < leftVal) {
        this.val[idx] = leftVal;
        this.val[leftIdx] = element;
        idx = leftIdx;
      } else if (element < rightVal) {
        this.val[idx] = rightVal;
        this.val[rightIdx] = element;
        idx = rightIdx;
      } else {
        break;
      }
    }
  }
}

function solution(no, works) {
  const heap = new Heap();
  works.forEach((n) => {
    heap.insert(n);
  });

  for (let i = 0; i < no; i++) {
    const max = heap.remove();
    heap.insert(Math.max(max - 1, 0));
  }

  console.log(heap.val)
  return heap.val.reduce((acc, cur) => acc + cur ** 2, 0);
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(2, [3, 3, 3])); // 17
console.log(solution(5, [0, 2, 2])); // 17

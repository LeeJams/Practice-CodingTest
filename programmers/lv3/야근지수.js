/* 
https://school.programmers.co.kr/learn/courses/30/lessons/12927

문제 설명
회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 
야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. 
Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.
Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 
퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.

제한 사항
works는 길이 1 이상, 20,000 이하인 배열입니다.
works의 원소는 50000 이하인 자연수입니다.
n은 1,000,000 이하인 자연수입니다.

입출력 예
works	        n	    result
[4, 3, 3]	    4	    12
[2, 1, 2]	    1	    6 
[1,1]	        3   	0
*/

// 효율성 통과 못함
function solution(n, works) {
  const sum = works.reduce((acc, cur) => acc + cur, 0);
  if (n > sum) return 0;

  while (n) {
    const idx = works.indexOf(Math.max(...works));
    works[idx]--;
    n--;
  }
  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
class Heap {
  constructor(){
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    if (!this.values.length) return undefined;

    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();
    return max;
  }
  sinkDown() {
    if (!this.values.length) return;
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let leftVal, rightVal;
      let swap = null;

      if (leftIdx < length) {
        leftVal = this.values[leftIdx];
        if (leftVal > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightVal = this.values[rightIdx];
        if (
          (swap === null && rightVal > element) ||
          (swap !== null && rightVal > leftVal)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
function solution_heap(n, works) {
  const sum = works.reduce((acc, cur) => acc + cur, 0);
  if (n > sum) return 0;

  const heap = new Heap();
  works.forEach(num => {
    heap.insert(num)
  })

  while(n){
    let max = heap.extractMax()
    max--
    n--
    heap.insert(max)
  }

  return heap.values.reduce((acc, cur) => acc + cur ** 2, 0);
}

console.time('basic')
console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0
console.log(solution(4, [6, 4, 3])); // 27
console.log(solution(99, [2, 15, 22, 55, 55])); // 580
console.timeEnd('basic')

console.time('heap')
console.log(solution_heap(4, [4, 3, 3])); // 12
console.log(solution_heap(1, [2, 1, 2])); // 6
console.log(solution_heap(3, [1, 1])); // 0
console.log(solution_heap(4, [6, 4, 3])); // 27
console.log(solution_heap(99, [2, 15, 22, 55, 55])); // 580
console.timeEnd('heap')
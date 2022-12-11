class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(values) {
    this.values.push(values);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element < parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    if (!this.values.length) return undefined;

    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    if (!this.values.length) return;
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let leftPriority, rightPriority;
      let swap = null;

      if (leftIdx < length) {
        leftPriority = this.values[leftIdx];
        if (leftPriority >= element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightPriority = this.values[rightIdx];
        if (
          (swap === null && rightPriority >= element) ||
          (swap !== null && rightPriority >= leftPriority)
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

function solution(n, k, enemy) {
  let answer = 0;
  const priorityQueue = new PriorityQueue();

  for (let i = 0; i < enemy.length; i++) {
    priorityQueue.enqueue(enemy[i]);
    n -= enemy[i];

    if (n < 0) {
      if (k) {
        const max = priorityQueue.dequeue();
        n += max;
        k--;
      } else break;
    }
    answer++;
  }

  return answer;
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(1);
priorityQueue.enqueue(45);
priorityQueue.enqueue(9234);
priorityQueue.enqueue(7654);
priorityQueue.enqueue(12);
priorityQueue.enqueue(129038);
priorityQueue.enqueue(16);

console.log(priorityQueue.values);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

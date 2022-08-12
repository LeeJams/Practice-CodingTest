function solution(order) {
  let result = 0;
  let sub = [];
  let i = 1;
  
  order.forEach((num) => {
    if (num === i) {
      result += 1;
      i++;
    } else {
      sub.push(num);
    }
  });

  for(let j = 0; j < sub.length; j++){

  }
}

console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([5, 4, 3, 2, 1])); // 5

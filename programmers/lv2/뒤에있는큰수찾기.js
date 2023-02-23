function solution(numbers) {
  const answer = [];
  let ch = [];
  for(let i = 0; i < numbers.length - 1; i++){
      const nextNum = numbers[i + 1];
      if(numbers[i] < nextNum) {
          answer[i] = nextNum;
          
          const temp = [];
          while(ch.length){
              const idx = ch.pop();
              if(numbers[idx] < nextNum) answer[idx] = nextNum;
              else temp.push(idx);
          }
          ch = temp;
      }else{
          answer[i] = -1;
          ch.push(i);
      }
  }
  answer.push(-1);
  return answer;
}
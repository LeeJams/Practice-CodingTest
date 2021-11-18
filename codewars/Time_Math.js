/* 
https://www.codewars.com/kata/5aceae374d9fd1266f0000f0/train/javascript

Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. 
This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

timeMath('01:24:31', '-', '02:31:41') === '22:52:50'
*/

function timeMath(time1, op, time2) {
  const first = time1.split(":");
  const second = time2.split(":");
  let check = [];

  if (op === "+") {
    check = first.map((n, idx) => parseInt(n) + parseInt(second[idx]));
    if (check[2] >= 60) {
      check[2] -= 60;
      check[1] += 1;
    }
    if(check[1] >= 60){
      check[1] -= 60;
      check[0] += 1;
    }
    if (check[0] >= 24) check[0] -= 24;
  } else {
    check = first.map((n, idx) => parseInt(n) - parseInt(second[idx]));
    if(check[2] < 0){
      check[2] += 60;
      check[1] -= 1;
    }
    if(check[1] < 0){
      check[1] += 60;
      check[0] -= 1;
    }
    if(check[0] < 0) check[0] = 24 + check[0];
  }
  return check.map((n) => n.toString().padStart(2, "0")).join(":");
}

function timeMath(time1, op, time2) {

  let seconds = time => 
    time.split(':').reduce((a, b) => a * 60 + +b, 0);
  
  let res = op === '+'
    ? seconds(time1) + seconds(time2)
    : seconds(time1) - seconds(time2);

  let date = new Date(res * 1000);
  console.log(date);
  return date.toTimeString().slice(0, 8);
    
}

console.log(timeMath("01:24:31", "+", "02:16:05")); // 03:40:36
console.log(timeMath("01:24:31", "+", "22:35:28")); // 23:59:59
console.log(timeMath("11:24:31", "-", "11:24:31")); // 00:00:00
console.log(timeMath("11:24:31", "-", "03:15:28")); // 08:09:03

const dates = [];
const now = new Date();

const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
const first_day = new Date(now.getFullYear(), now.getMonth(), 1).getDay();

let day = 1;
let idx = 0;

while (day < lastDay.getDate()) {
  const arr = [];

  for (let i = 0; i < 7; i++) {
    if (i < first_day && idx === 0) {
      arr.push(null);
    } else {
      arr.push(day);
      day++;
    }
  }
  idx++;
  dates.push(arr);
}
console.log(dates);
// https://school.programmers.co.kr/learn/courses/30/lessons/155651
function solution(book_time) {
  book_time.sort();
  const times = [];
  book_time.forEach((t) => {
      const tmp = t[0].split(':');
      const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
      const idx = times.findIndex((e) => e <= startTime);
      if(idx === -1) times.push(getNextTime(t[1]));
      else {
         times[idx] = getNextTime(t[1]);
      }
  });
  
  return times.length;
}
                    
function getNextTime(endTime) {
  const next = endTime.split(':');
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}

console.log(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]])); // 3
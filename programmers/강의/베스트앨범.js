/* 
해쉬 관련문제
https://school.programmers.co.kr/learn/courses/13213/lessons/91081

문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 
베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

제한사항
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.

입출력 예
genres	                                          plays	                        return
["classic", "pop", "classic", "classic", "pop"]	  [500, 600, 150, 800, 2500]	  [4, 1, 3, 0]

*/

function solution(genres, plays) {
  const totalPlay = {};
  const hash = [];

  genres.forEach((gen, idx) => {
    totalPlay[gen] = totalPlay[gen] ? totalPlay[gen] + plays[idx] : plays[idx];
    const hashIdx = hash.findIndex((f) => f.gender === gen);
    if (hashIdx === -1) {
      hash.push({ gender: gen, pl: [[plays[idx], idx]] });
    } else {
      hash[hashIdx].pl.push([plays[idx], idx]);
    }
  });

  hash.forEach((n) => {
    n.pl.sort((a, b) => {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      } else {
        if (a[1] > b[1]) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  });

  const order = [];
  for (const item in totalPlay) {
    order.push([totalPlay[item], item]);
  }
  order.sort((a, b) => a[0] - b[0]);

  const result = [];
  while (order.length) {
    const pop = order.pop();
    const idx = hash.findIndex((f) => f.gender === pop[1]);

    for (let i = 0; i < 2; i++) {
      const rn = hash[idx].pl.pop();
      if (!rn) break;
      result.push(rn[1]);
    }
  }

  return result;
}

function solution_answer(genres, plays) {
  const genreMap = new Map();
  genres
    .map((genre, idx) => [genre, plays[idx]])
    .forEach(([genre, play], idx) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, idx }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });
  console.log(genreMap);

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.idx);
}

console.log(
  solution_answer(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
console.log(solution_answer(["classic"], [500])); // [0]

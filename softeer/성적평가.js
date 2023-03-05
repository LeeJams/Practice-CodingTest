const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input[0];
const scores = [];

for(let i = 1; i < input.length; i++){
    scores.push(input[i].split(' '));
}

const total = Array.from({length: num}, () => [0]);
for(let i = 0; i < scores.length; i++) {
    for(let j = 0; j < num; j++) {
        total[j][0] += Number(scores[i][j]);
        total[j][1] = j;
    }
}
total.sort((a, b) => b[0] - a[0]);

const sorted = scores.map(n => n.map((m, idx) => [m, idx]).sort((a, b) => b[0] - a[0]));
sorted.push(total);
const answer = [];

sorted.forEach((n, idx) => {
    answer[idx] = [];
    n.forEach((m, r) => {
        let rank = r + 1;
        if(r > 0 && n[r][0] === n[r - 1][0]) rank = answer[idx][n[r - 1][1]];
        answer[idx][m[1]] = rank;

    });
});
answer.forEach(n => {
    console.log(n.join(" "));
});
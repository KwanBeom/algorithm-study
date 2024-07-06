// https://www.acmicpc.net/problem/14503

function solution(input) {
  const [n, m] = input[0].split(' ').map(Number);
  const [r, c, d] = input[1].split(' ').map(Number);
  const map = input.slice(2).map((v) => v.split(' ').map(Number));
  let cnt = 0;

  // 방향 정의 (북, 동, 남, 서)
  const direction = [
    [-1, 0], // 북
    [0, 1], // 동
    [1, 0], // 남
    [0, -1], // 서
  ];

  const turnLeft = (d) => (d + 3) % 4;

  const recur = (x, y, d) => {
    if (map[x][y] === 0) {
      map[x][y] = 2; // 청소 완료 표시
      cnt++;
    }

    for (let i = 0; i < 4; i++) {
      d = turnLeft(d);
      const nx = x + direction[d][0];
      const ny = y + direction[d][1];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && map[nx][ny] === 0) {
        recur(nx, ny, d);
        return;
      }
    }

    // 후진
    const back = (d + 2) % 4;
    const bx = x + direction[back][0];
    const by = y + direction[back][1];

    if (bx >= 0 && by >= 0 && bx < n && by < m && map[bx][by] !== 1) {
      recur(bx, by, d);
    }
  };

  recur(r, c, d);
  console.log(cnt);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

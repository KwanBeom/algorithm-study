// https://www.acmicpc.net/problem/2667

// input
// 7
// 0110100
// 0110101
// 1110101
// 0000111
// 0100000
// 0111110
// 0111000

// output
// 3
// 7
// 8
// 9
function solution(input) {
  const n = parseInt(input[0], 10);
  const map = new Array(n).fill().map((_, i) => input[i + 1].split(''));
  const chk = new Array(n).fill().map(() => new Array(n).fill(false));

  let cnt = 0;
  const hc = [];

  const [mx, my] = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];

  const dfs = (x, y) => {
    cnt += 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + mx[i];
      const ny = y + my[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (chk[nx][ny] === false && map[nx][ny] === '1') {
          chk[nx][ny] = true;
          dfs(nx, ny);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < n && j < n) {
        if (chk[i][j] === false && map[i][j] === '1') {
          chk[i][j] = true;
          cnt = 0;
          dfs(i, j);
          hc.push(cnt);
        }
      }
    }
  }

  console.log(hc.length);
  console.log(
    hc
      .map(Number)
      .sort((a, b) => a - b)
      .join('\n')
  );
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

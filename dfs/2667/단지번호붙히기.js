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
  const map = input.slice(1).map(line => line.split('').map(Number));
  const chk = Array.from({ length: n }, () => Array(n).fill(false));
  const result = [];
  let each = 0;

  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];

  const dfs = (y, x) => {
    each += 1;

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
        if (map[ny][nx] === 1 && !chk[ny][nx]) {
          chk[ny][nx] = true;
          dfs(ny, nx);
        }
      }
    }
  };

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (!chk[j][i] && map[j][i] === 1) {
        chk[j][i] = true;
        each = 0;
        dfs(j, i);
        result.push(each);
      }
    }
  }

  result.sort((a, b) => a - b);
  console.log(result.length);
  result.forEach(n => console.log(n));
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

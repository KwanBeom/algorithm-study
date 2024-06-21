// https://www.acmicpc.net/problem/1926

// input
// 6 5
// 1 1 0 1 1
// 0 1 1 0 0
// 0 0 0 0 0
// 1 0 1 1 1
// 0 0 1 1 1
// 0 0 1 1 1

// output
// 4
// 9

function solution(input) {
  const [n, m] = input[0];
  const map = new Array(n).fill().map((_, i) => input[i + 1]);
  const chk = new Array(n).fill().map(() => new Array(m).fill(false));

  let cnt = 0;
  let maxv = 0;

  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];

  const bfs = (y, x) => {
    let rs = 1;
    const q = [[y, x]];

    while (q.length > 0) {
      const [ey, ex] = q.shift();

      for (let k = 0; k < 4; k++) {
        const ny = ey + dy[k];
        const nx = ex + dx[k];

        if (0 <= ny && ny < n && 0 <= nx && nx < m) {
          if (map[ny][nx] === 1 && !chk[ny][nx]) {
            rs += 1;
            chk[ny][nx] = true;
            q.push([ny, nx]);
          }
        }
      }
    }

    return rs;
  };

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (map[j][i] === 1 && !chk[j][i]) {
        chk[j][i] = true;
        cnt += 1;
        maxv = Math.max(maxv, bfs(j, i));
      }
    }
  }

  console.log(cnt);
  console.log(maxv);
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
  solution(input.map(v => v.split(' ').map(Number)));
  process.exit();
});

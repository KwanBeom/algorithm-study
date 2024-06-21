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

  const mx = [0, 1, 0, -1];
  const my = [1, 0, -1, 0];

  let cnt = 0;
  let mw = 0;

  const bfs = (x, y) => {
    const q = [[x, y]];
    let w = 1;

    while (q.length > 0) {
      const [ox, oy] = q.shift();

      for (let i = 0; i < 4; i += 1) {
        const nx = ox + mx[i];
        const ny = oy + my[i];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
          if (map[nx][ny] === 1 && chk[nx][ny] === false) {
            w += 1;
            chk[nx][ny] = true;
            q.push([nx, ny]);
          }
        }
      }
    }

    return w;
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (chk[i][j] === false && map[i][j] === 1) {
        chk[i][j] = true;
        cnt += 1;
        mw = Math.max(bfs(i, j), mw);
      }
    }
  }

  console.log(mw, cnt);
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

// https://www.acmicpc.net/problem/15649

function solution(input) {
  const [n, m] = input.split(' ').map(Number);
  const chk = Array.from({ length: n + 1 }, () => false);
  const result = [];

  const backtracking = num => {
    if (num === m) {
      console.log(result.join(' '));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (chk[i] === false) {
        chk[i] = true;
        result.push(i);
        backtracking(num + 1);
        // 아랫 구문은 재귀 호출 스택이 해소된 이후에 실행
        chk[i] = false;
        result.pop();
      }
    }
  };

  backtracking(0);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

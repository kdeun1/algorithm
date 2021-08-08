function solution(n, f) {
  let answer = [];
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: n }, () => 0);

  function factorial(n) {
    if (n === 0) return 1;
    if (n === 1) return n;
    return n * factorial(n - 1);
  }

  function nCk(n, k) {
    return factorial(n) / (factorial(n - k) * factorial(k));
  }

  function sumDFS(arr) {
    let num = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      num += (nCk(len - 1, i) * arr[i]);
    }
    return num;
  }

  function DFS(L) {
    if (answer.length) return;
    if (L === n) {
      // console.log(tmp);
      if (f === sumDFS(tmp)) {
        answer = [...tmp];
        return;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (!ch[i]) {
          ch[i] = 1;
          tmp[L] = i + 1;
          DFS(L+1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);

  return answer;
}

solution(4, 16);

function solution(n, f) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      return dy[n][r] = combi(n-1, r-1) + combi(n-1, r);
    }
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + (b[L] * p[L]));
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);

  return answer;
}

solution(4, 16); // [3, 1, 2, 4]
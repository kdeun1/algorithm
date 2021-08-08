function solution(n, m) {
  let answer = 0;
  let ch = Array.from({ length: n }, () => 0); // 1 2 3 4
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      console.log(tmp);
      answer++;
    } else {
      for (let i = 0; i < n; i++) {
        if (L === 0 || tmp[L - 1] < i + 1) {
          ch[i] = 1;
          tmp[L] = i + 1;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);

  return answer;
}

solution(4, 2);

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L+1, i+1);
      }
    }
  }

  DFS(0, 1);
  return answer;
}

solution(4, 2);
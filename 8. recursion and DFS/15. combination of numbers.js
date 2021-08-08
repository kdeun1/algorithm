function solution(k, arr, m) {
  let answer = 0;
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0); // arr의 요소들
  let tmp = Array.from({ length: k }, () => 0);

  function DFS(L) {
    if (L === k) {
      const sum = tmp.reduce((acc, cur) => acc += cur);
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          const lastIdx = ch.lastIndexOf(1);
          if (!lastIdx || lastIdx < i) {
            ch[i] = 1;
            tmp[L] = arr[i];
            DFS(L + 1);
            ch[i] = 0;
          }
        }
      }
    }
  }
  DFS(0);

  return answer;
}

solution(3, [2, 4, 5, 8, 12], 6);

function solution(n, k, arr, m) {
  let answer = 0;
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = s; i < n; i++) {
        DFS(L+1, i+1, sum+arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

solution(5, 3, [2, 4, 5, 8, 12], 6); // 2
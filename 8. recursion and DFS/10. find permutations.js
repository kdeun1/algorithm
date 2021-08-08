function solution(m, arr) {
  let answer = 0;
  const arrLen = arr.length;

  function DFS(L, accArr) {
    if (L > m) return;
    if (L === m) {
      answer++;
      console.log(accArr.join(' '));
    } else {
      const excludedArr = arr.filter((v) => !accArr.includes(v));
      for (let num of excludedArr) {
        DFS(L + 1, [...accArr, num]);
      }
    }
  }
  DFS(0, []);

  return answer;
}

solution(2, [3, 6, 9]); // 6 = m * arr.length

function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L+1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);

  return answer;
}

solution(2, [3, 6, 9]);
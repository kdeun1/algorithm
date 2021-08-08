// n : 숫자 개수, m : 레벨 제한
function solution(n, m) {
  let total = 0;
  function DFS(L, str) {
    if (L > m) return;
    if (L === m) {
      console.log(str);
      total++;
    } else {
      for (let i = 1; i <= n; i++) {
        DFS(L + 1, `${str} ${i}`);
      }
    }
  }
  DFS(0, '');
  return total;
}

solution(3, 2); // 9 = 3^2
solution(4, 2); // 16 = 4^2
solution(4, 3); // 64 = 4^3

// n : 숫자 개수, m : 레벨 제한
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L+1);
      }
    }
  }
  DFS(0);
  return answer;
}

solution(3, 2);
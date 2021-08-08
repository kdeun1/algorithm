function solution(a, b) {
  let answer = 0;
  function DFS(n, r) {
    if (r === 1) {
      answer += n;
      return;
    }
    if (n === r) {
      answer++;
      return;
    }
    DFS(n-1, r-1);
    DFS(n-1, r);
  }
  DFS(a, b);

  return answer;
}

solution(5, 3); // 10
solution(33, 19); // 818809200

function solution(n, r) {
  let answer;

  function DFS(n, r) {
    if (n === r || r === 0) {
      return 1;
    } else {
      return DFS(n-1, r-1) + DFS(n-1, r);
    }
  }
  answer = DFS(n, r);
  return answer;
}

solution(5, 3);
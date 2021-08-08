function solution(n) {
  let answer = 1;

  function factorial(num) {
    if (num === 1) {
      return;
    } else {
      answer *= num;
      factorial(num - 1);
    }
  }
  factorial(n);
  return answer;
}

solution(5);

function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}

solution(5);
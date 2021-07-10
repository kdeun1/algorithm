// my solution
function solution(n) {
  let answer = '';
  function divTwo(n) {
    answer = `${n % 2}${answer}`;
    if (n > 1) {
      n = Math.floor(n / 2);
      divTwo(n);
    }
  }
  divTwo(n);
  return answer;
}

// explanation
function solution(n) {
  let answer = '';
  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      DFS(parseInt(L / 2));
      answer += String(L%2);
    }
  }
  DFS(n);
  return answer;
}

solution(11); // 1011
solution(234); // 11101010

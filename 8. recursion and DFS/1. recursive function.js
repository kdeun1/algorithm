// my solution
function solution(n) {
  let cnt = 1;
  let answer = '';
  function recursive(n) {
    if (cnt <= n) {
      answer += `${cnt} `;
      cnt++;
      recursive(n);
    }
  }
  recursive(n);
  return answer;
}

solution(3);

// explanation
function solution(n) {
  function DFS(L) { // level의 약자를 쓴다.
    if (L === 0) {
      return;
    } else {
      console.log(L);
      DFS(L-1);
    }
  }
  DFS(n);
}

DFS(3); // 3, 2, 1

function solution(n) {
  function DFS(L) { // level의 약자를 쓴다.
    if (L === 0) {
      return;
    } else {
      DFS(L-1);
      console.log(L);
    }
  }
  DFS(n);
}

DFS(3); // 1, 2, 3
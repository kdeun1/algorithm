// 전위 순회
function solution(limit) {
  let answer = '';
  function preorder(n) {
    if (n > limit) return;
    answer += String(n);
    preorder(n * 2);
    preorder((n * 2) + 1);
  }
  preorder(1);
  return answer;
}

solution(7); // 1245367

// 후위 순회
function solution(limit) {
  let answer = '';
  function postorder(n) {
    if (n > limit) return;
    postorder(n * 2);
    postorder((n * 2) + 1);
    answer += String(n);
  }
  postorder(1);
  return answer;
}

solution(7); // 4526731
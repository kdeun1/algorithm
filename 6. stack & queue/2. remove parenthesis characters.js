function solution(str) {
  const stack = [];
  let answer = '';
  for (let c of str) {
    if (c === '(') {
      stack.push(1);
    } else if (c === ')') {
      stack.pop();
    } else if (stack.length === 0) {
      answer += c;
    }
  }
  return answer;
}

function solution(str) {
  let answer;
  let stack = [];
  for (let x of str) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x);
    }
  }
  answer = stack.join('');
  return answer;
}

solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)');

solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
function solution(ironPipe) {
  let answer = 0;
  const stack = [];
  let prevVal = '';
  for (let p of ironPipe) {
    if (p === '(') {
      stack.push(p);
    } else {
      stack.pop();
      if (prevVal === '(') {
        answer += stack.length;
      } else {
        answer++;
      }
    }
    prevVal = p;
  }
  return answer;
}

function solution(s) {
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === '(') {
        answer += (stack.length);
      } else {
        answer += 1;
      }
    }
  }
  return answer;
}

solution('()(((()())(())()))(())'); // 17
solution('(((()(()()))(())()))(()())'); // 24
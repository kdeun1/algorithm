// 연산자 여부 확인 (T : 연산자, F : 피연산자)
function isOperator(c) {
  return !!(c === '+' || c === '-' || c === '*' || c === '/');
}

// 계산 로직
function calculate(n1, n2, op) {
  if (op === '+') return n1 + n2;
  else if (op === '-') return n1 - n2;
  else if (op === '*') return n1 * n2;
  else return n1 / n2;
}

function solution(str) {
  const stack = [];

  for (let c of str) {
    if (!isOperator(c)) {
      stack.push(c);
    } else {
      let last = stack.pop();
      let first = stack.pop();
      let result = calculate(+first, +last, c);
      stack.push(result);
    }
  }
  return stack[0];
}

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') {
        stack.push(lt + rt);
      } else if (x === '-') {
        stack.push(lt - rt);
      } else if (x === '*') {
        stack.push(lt * rt);
      } else if (x === '/') {
        stack.push(lt / rt);
      }
    }
  }
  answer = stack[0];
  return answer;
}

solution('352+*9-'); // 12
solution('7352-*+4+'); // 20
function solution(str) {
  const arr = [];
  for (let c of str) {
    if (c === '(') {
      arr.push('(');
    } else {
      if (arr.length === 0) {
        return 'NO';
      }
      arr.pop();
    }
  }
  return arr.length > 0 ? 'NO' : 'YES';
}

solution('(()(()))(()');
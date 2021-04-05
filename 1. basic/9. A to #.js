function solution(arr) {
  return [...arr].reduce((acc, cur) => {
    if (cur === 'A') acc.push('#');
    else acc.push(cur);
    return acc;
  }, []).join('');
}

function solution(str) {
  let result = '';
  for (let i of str) {
    if (i === 'A') result += '#';
    else result += i;
  }
  return result;
}
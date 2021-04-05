function solution(str) {
  let result = '';
  for (let s of str) {
    if (result.indexOf(s) < 0) result+=s;
  }
  return result;
}

function solution(str) {
  return [...new Set(str)].join('');
}

function solution(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) result += s[i];
  }
  return result;
}
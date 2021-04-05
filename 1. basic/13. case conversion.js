function solution(str) {
  let result = '';
  for (let s of str) {
    if (s === s.toUpperCase()) {
      result += s.toLowerCase();
    } else {
      result += s.toUpperCase();
    }
  }
  return result;
}

function solution(str) {
  let result = '';
  for (let s of str) {
    if (s.charCodeAt() >= 97 && s.charCodeAt() <= 122) {
      result += s.toLowerCase();
    } else if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) {
      result += s.toUpperCase();
    }
  }
  return result;
}

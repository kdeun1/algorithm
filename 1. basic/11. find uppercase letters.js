function solution(str) {
  let cnt = 0;
  for (let i of str) {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) cnt++;
  }
  return cnt;
}

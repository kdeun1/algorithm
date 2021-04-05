function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += i;
  }
  return cnt;
}
function solution(arr) {
  let cnt = 0;
  let max = 0;
  for (cm of arr) {
    if (max < cm) {
      max = cm;
      cnt++;
    }
  }
  return cnt;
}

function solution(m, arr) {
  let minCostSortedArr = arr
    .map(v => [v[0] + v[1], (v[0] / 2) + v[1]])
    .sort((a, b) => a[0] - b[0]);
  let cnt = 0;
  for (let i = 0; i < minCostSortedArr.length; i++) {
    let cur = minCostSortedArr[i];
    if (m - cur[0] >= 0) {
      m -= cur[0];
      cnt++;
    } else if (m - cur[1] >= 0) {
      // m -= cur[1];
      cnt++;
      break;
    }
  }
  return cnt;
}
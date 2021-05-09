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

function solution(m, arr) {
  let answer = 0;
  let len = arr.length;
  arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

  for (let i = 0; i < len; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;

    for (let j = 0; j < len; j++) {
      if (j !== i && (arr[j][0] + arr[j][1]) > money) break;
      if (j !== i && (arr[j][0] + arr[j][1]) <= money) {
        money -= (arr[j][0] + arr[j][1]);
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}
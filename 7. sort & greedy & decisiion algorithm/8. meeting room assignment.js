function solution(arr) {
  let cnt = 0;
  let start = 0;
  const sortedArr = arr.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return a[0] - b[0];
  });
  for (let time of sortedArr) {
    if (start <= time[0]) {
      start = time[1];
      cnt++;
    }
  }
  return cnt;
}

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]); // 3
solution([[3, 3], [1, 3], [2, 3]]); // 2
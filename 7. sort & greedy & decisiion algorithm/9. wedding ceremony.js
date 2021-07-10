function solution(arr) {
  let cnt = 1;
  let maxCnt = 1;
  let end; // 0 ~ 72
  const sortedArr = arr.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return a[0] - b[0];
  });

  end = sortedArr[0][0];
  for (let time of sortedArr) {
    if (time[0] < end) {
      maxCnt = Math.max(maxCnt, cnt++);
    } else if (time[0] > end) {
      cnt--;
      end = time[1];
    } else {
      end = time[1];
    }
  }

  return maxCnt;
}

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let tLine = [];
  for (let x of times) {
    tLine.push([x[0], 's']); // start
    tLine.push([x[1], 'e']); // end
  }
  tLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].chartCodeAt();
    }
    return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of tLine) {
    if (x[1] === 's') {
      cnt++;
    } else {
      cnt--;
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]); // 2
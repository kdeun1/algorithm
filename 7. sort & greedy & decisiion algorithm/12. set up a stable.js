// my solution
function getCount(arr, capacity) {
  let count = 0;
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - prev >= capacity) {
      count++;
      prev = arr[i];
    }
  }

  return count;
}

function solution(m, arr) {
  arr.sort((a, b) => a - b)

  // let lt = arr[0];
  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (getCount(arr, mid) < m - 1) {
      rt = mid - 1;
    } else {
      answer = mid;
      lt = mid + 1;
    }
  }

  return answer;
}

// explanation
function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

// 마구간이 1부터 시작하지 않는 경우가 있음.
// lt와 rt가 마구간 사이 값에 대한 최소값, 최대값이라고 생각할 것.
solution(3, [1, 2, 8, 4, 9]); // 3
solution(4, [1, 14, 9, 16, 100]); // 7
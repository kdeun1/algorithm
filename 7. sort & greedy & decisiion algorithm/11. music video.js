// my solution
function getCount(arr, avg) {
  let count = 1;
  let sum = 0;
  let idx = 0;
  for (let min of arr) {
    if (sum + min > avg) {
      count++;
      sum = min;
    } else {
      sum += min;
    }
  }
  return count;
}

function solution(m, arr) {
  const sortedArr = arr.sort((a, b) => a - b); // 오름 차순
  let rt = arr.reduce((acc, cur) => acc += cur); // 전체 합
  let lt = Math.ceil(rt / m); // 평균 - 올림
  let answer = 0;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2); // 내림
    if (getCount(sortedArr, mid) > m) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
      answer = mid;
    }
  }

  return answer;
}

// explanation
function count(songs, capacity) {
  let cnt = 1, sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // 17

solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // 17
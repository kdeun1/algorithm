function solution(m, arr) {
  let sortedArr = arr.sort((a, b) => a - b); // 오름차순
  let idx = 0;

  while (sortedArr.length > 1) {
    let mid = Math.floor(sortedArr.length / 2);
    if (m < sortedArr[mid]) {
      sortedArr = sortedArr.slice(0, mid);
    } else if (sortedArr[mid] < m) {
      sortedArr = sortedArr.slice(mid + 1);
      idx = idx + mid + 1;
    } else {
      sortedArr = [sortedArr[mid]];
      idx = idx + mid;
    }
  }
  return idx + 1;
}

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

solution(32, [23, 87, 65, 12, 57, 32, 99, 81]); // 3
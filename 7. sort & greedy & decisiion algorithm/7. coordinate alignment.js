function solution(arr) {
  const sortedArr = arr;
  return sortedArr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] == b[0]) {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      if (a[1] == b[1]) {
        return 0;
      }
    }
  });
}

function solution(arr) {
  const sortedArr = arr;
  return sortedArr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return a[1] - b[1];
  });
}

function solution(arr) {
  return arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
}
solution([[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]);
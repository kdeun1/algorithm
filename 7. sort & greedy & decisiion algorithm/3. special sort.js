function specialSort(arr) {
  if (arr.every(v => v >= 0) ^ arr.every(v => v < 0)) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] >= 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (arr.slice(0, arr.length - i).every(v => v < 0)
      && arr.slice(arr.length - i).every(v => v >= 0)
    ) {
      break;
    }
  }
  return arr;
}

function specialSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

specialSort([1, 2, 3, -3, -2, 5, 6, -6]); // [-3, -2, -6, 1, 2, 3, 5, 6]
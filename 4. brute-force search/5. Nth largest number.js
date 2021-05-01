function solution(m, arr) {
  let sumSet = new Set();
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sumSet.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  let sumSortedArr = [...sumSet].sort((a, b) => b - a);
  return sumSortedArr[m - 1];
}
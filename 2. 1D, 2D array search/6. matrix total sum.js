function solution(arr) {
  let maxSum = 0;
  let rowSum = 0;
  let cnt = arr.length;

  rowSum = 0;
  for (let i = 0; i < cnt; i++) {
    rowSum = Math.max(...arr[i]);
    if (maxSum < rowSum) maxSum = rowSum;
  }

  rowSum = 0;
  for (let i = 0; i < cnt; i++) {
    for (let j = 0; j < cnt; j++) {
      rowSum += arr[j][i];
    }
    if (maxSum < rowSum) maxSum = rowSum;
  }

  rowSum = 0;
  for (let i = 0; i < cnt; i++) {
    rowSum += arr[i][i];
  }
  if (maxSum < rowSum) maxSum = rowSum;

  rowSum = 0;
  for (let i = 0; i < cnt; i++) {
    rowSum += arr[i][cnt - i - 1];
  }
  if (maxSum < rowSum) maxSum = rowSum;

  return maxSum;
}

function solution(arr) {
  let result = 0;
  let sum1 = 0;
  let sum2 = 0;
  const cnt = arr.length;

  for (let i = 0; i < cnt; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < cnt; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    result = Math.max(result, sum1, sum2);
  }

  sum1 = sum2 = 0;
  for (let i = 0; i < cnt; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][cnt - i - 1];
  }
  result = Math.max(result, sum1, sum2);

  return result;
}

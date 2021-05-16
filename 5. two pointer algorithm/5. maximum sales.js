function solution(m, arr) {
  let maxSum = 0;
  let windowStart = 0;
  let sum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    if (windowEnd >= m - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}

solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);

function solution(k, arr) {
  let answer, sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  for (let i = k; i < arr.length; i++) {
    sum += (arr[i] - arr[i-k]);
    answer = Math.max(answer, sum);
  }
  return answer;
}
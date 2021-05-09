function solution(n, arr) {
  let answer = 0, left = 0, sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > n) {
      sum -= arr[left];
      left++;
    }
    answer += (right - left + 1);
  }
  return answer;
}
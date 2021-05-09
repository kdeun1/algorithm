function solution(n, arr) {
  let answer = 0, sum = 0, left = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === n) {
      answer++;
    }
    while (sum >= n) {
      sum -= arr[left];
      left++;
      if (sum === n) {
        answer++;
      }
    }
  }
  return answer;
}
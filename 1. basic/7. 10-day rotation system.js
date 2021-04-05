function solution(n, arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === n) result++;
  }
  return result;
}
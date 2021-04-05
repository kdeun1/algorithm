function solution(arr) {
  let result = 0;
  let added = 1;
  for (let n of arr) {
    if (n === 1) {
      result += added;
      added++;
    } else {
      added = 1;
    }
  }
  return result;
}

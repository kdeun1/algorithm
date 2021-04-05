function solution(arr) {
  let result = '';
  for (let str of arr) {
    if (result.length < str.length) result = str;
  }
  return result;
}

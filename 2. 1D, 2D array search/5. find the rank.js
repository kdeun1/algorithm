function solution(arr) {
  let result = [];
  let sortedArr = [...arr].sort((a, b) => b - a);
  for (score of arr) {
    result.push(sortedArr.indexOf(score) + 1);
  }
  return result;
}

function solution(arr) {
  let result = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        result[i]++;
      }
    }
  }
  return result;
}

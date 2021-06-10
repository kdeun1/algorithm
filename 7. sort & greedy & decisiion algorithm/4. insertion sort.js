function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let targetIdx = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        targetIdx = j + 1;
        break;
      }
    }
    arr[targetIdx] = temp;
  }
  return arr;
}

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
  return answer;
}

solution([11, 7, 5, 6, 10, 9]); // [5, 6, 7, 9, 10, 11]
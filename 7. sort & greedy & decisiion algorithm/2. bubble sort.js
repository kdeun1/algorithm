function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) { // 끝에서부터 정렬을 안하는 칸 수
    for (let j = 0; j < arr.length - i - 1; j++) { // 버블 정렬이 들어가는 칸 수
      if (arr[j] > arr[j + 1]) {
        // 선택정렬보다 교환을 위 조건마다 해주기 때문에 많이 교환한다.
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

bubbleSort([13, 5, 11, 7, 23, 15]);
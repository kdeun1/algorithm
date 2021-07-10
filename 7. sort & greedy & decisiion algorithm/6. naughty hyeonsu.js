function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

solution([120, 125, 152, 130, 135, 135, 143, 127, 160]); // 3, 8. recursion and DFS
solution([120, 130, 150, 150, 130, 150]); // 3, 5
function solution(arr) {
  const cnt = arr.length;
  let addedArr = [];
  let result = 0;

  for (let i = 0; i < cnt + 2; i++) {
    let midArr = [];
    if (i === 0 || i === cnt + 1) {
      for (let j = 0; j < cnt + 2; j++) {
        midArr.push(0);
      }
      addedArr.push(midArr);
    } else {
      addedArr.push([0, ...arr[i], 0]);
    }
  }

  for (let i = 1; i < cnt + 1; i++) {
    for (let j = 1; j < cnt + 1; j++) {
      if (addedArr[i][j] > addedArr[i - 1][j]
        && addedArr[i][j] > addedArr[i][j - 1]
        && addedArr[i][j] > addedArr[i + 1][j]
        && addedArr[i][j] > addedArr[i][j + 1]
      ) {
        result++;
      }
    }
  }
}
// 이 방법은 너무 무식하게 외곽에 0을 붙여주는 비효율적 코드

function solution(arr) {
  const cnt = arr.length;
  let result = 0;
  for (let i = 0; i < cnt; i++) {
    for (let j = 0; j < cnt; j++) {
      let cur = arr[i][j];
      let top = i > 0 ? arr[i - 1][j] : 0;
      let left = j > 0 ? arr[i][j - 1] : 0;
      let right = j < cnt - 1 ? arr[i][j + 1] : 0;
      let bottom = i < cnt - 1 ? arr[i + 1][j] : 0;
      if (cur > top && cur > left && cur > right && cur > bottom) {
        result++;
      }
    }
  }
  return result;
}
// 사방면 모두 비교 후 성립이 될 때 증감하도록 함

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dx[k];
        if (nx > 0 && nx < n && ny > 0 && ny < n
          && arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}
// 기본적으로 flag를 1로 설정, 사방면 중 하나라도 높은 경우 flag를 0으로 만든 후 break

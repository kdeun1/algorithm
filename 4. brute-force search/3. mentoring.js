function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let nTest = arr[i];
    if (i === 0) {
      for (let x = 0; x < nTest.length - 1; x++) {
        for (let y = x + 1; y < nTest.length; y++) {
          answer.push([nTest[x], nTest[y]]);
        }
      }
    } else {
      let prevArr = [...answer];
      answer = [];
      for (let x = 0; x < prevArr.length; x++) {
        let first = prevArr[x][0];
        let second = prevArr[x][1];
        if (nTest.indexOf(first) < nTest.indexOf(second)) {
          answer.push([first, second]);
        }
      }
    }
  }
  return answer.length;
}

function solution(arr) {
  let answer = 0;
  let m = arr.length;
  let n = arr[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0, pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}
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
// 파라미터가 7인 경우
function solution(a, b, c, d, e, f, g) {
  return Math.min(a, b, c, d, e, f, g);
}

// 파라미터가 배열인 경우
function solution(arr) {
  return arr.reduce((acc, n) => {
    return Math.min(acc, n);
  }, Number.MAX_SAFE_INTEGER)
}

function solution(arr) {
  return arr.reduce((acc, n) => Math.min(acc, n), Number.MAX_SAFE_INTEGER)
}

function solution(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

function solution(arr) {
  return Math.min(...arr);
}

function solution(arr) {
  return Math.min.apply(null, arr);
}
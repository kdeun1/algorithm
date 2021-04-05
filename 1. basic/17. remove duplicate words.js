function solution(arr) {
  let answer = [];
  for (str of arr) {
    if (answer.indexOf(str) === -1) answer.push(str);
  }
  return answer;
}

function solution(arr) {
  return [...new Set(arr)];
}

function solution(arr) {
  return arr.filter((v, i) => {
    if (arr.indexOf(v) === i) {
      return v;
    }
  })
}

function solution(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i)
}
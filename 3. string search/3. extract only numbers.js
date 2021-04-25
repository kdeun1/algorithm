function solution(str) {
  // return Number(str.replace(/[a-zA-Z]/g, ''));
  // return Number(str.replace(/[^0-9]/g, ''));
  return Number(str.replace(/[^\d]/g, ''));
}

function solution(str) {
  let answer = '';
  for (let s of str) {
    if (!isNaN(s)) {
      answer += s;
    }
  }
  return parseInt(answer);
}

function solution(str) {
  let answer = 0;
  for (let s of str) {
    if (!isNaN(s)) { // 숫자인 경우
      answer = (answer * 10) + Number(x);
      // answer = (answer * 10) + parseInt(x);
    }
  }
  return answer;
}

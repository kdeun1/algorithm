function solution(str) {
  if (str.length < 2) return str;
  let answer = '';
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let next = str[i + 1];
    if (curr === next) {
      cnt++;
    } else {
      answer += curr;
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }
  return answer;
}
// str의 인덱스 + 1까지 하여 next 값을 구함
// cnt 숫자를 그대로 더함
// str.length가 2 미만의 경우 그대로 반환

function solution(str) {
  let answer = '';
  let cnt = 1;
  str += ' ';
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
// str 맨 뒤에 공백을 하나 추가하여 for문의 max치까지 반복돌림
// cnt를 String() 함수로 문자열로 바꾼 후 문자 붙이기
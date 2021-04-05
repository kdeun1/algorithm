function solution(a, b, c) {
  let answer = (a < b ? a : b) < c ? (a < b ? a : b) : c;
  return answer;
}

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}
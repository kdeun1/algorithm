function solution(a, b, c) {
  let answer = 'YES';
  let max;
  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;
  let sum = a + b + c;
  if (sum - max <= max) answer = 'NO'
  return answer;
}

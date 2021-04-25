function solution(str) {
  let result = 'YES';
  const onlyLowerCharStr = str.toLowerCase().replace(/[^a-z]/g, '');
  const reverseLowerStr = onlyLowerCharStr.split('').reverse().join('');
  if (onlyLowerCharStr !== reverseLowerStr) {
    result = 'NO';
  }
  return result;
}

function solution(s) {
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s !== s.split('').reverse().join('')) return 'NO';
  return 'YES';
}

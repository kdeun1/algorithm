function solution(str) {
  let result = 'YES';
  const onlyLowerCharStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
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

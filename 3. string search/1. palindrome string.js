function solution(str) {
  let result = 'NO';
  const reverseStr = [...str].reverse().join('');
  if (str.toUpperCase() === reverseStr.toUpperCase()) {
    result = 'YES';
  }
  return result;
}
// reverse()를 활용한 비교

function solution(str) {
  const totalCnt = str.length;
  const halfCnt = Math.floor(totalCnt);
  let result = 'YES';
  for (let i = 0; i < halfCnt; i++) {
    if (str[i].toUpperCase() !== str[totalCnt - 1 - i].toUpperCase()) {
      result = 'NO';
      break;
    }
  }
  return result;
}
// char 하나씩 양쪽에서부터 비교

function solution(str) {
  let result = 'YES';
  const lowerStr = str.toLowerCase();
  const cnt = str.length;
  for (let i = 0; i < Math.floor(cnt / 2); i++) {
    if (lowerStr[i] !== lowerStr[cnt - 1 - i]) {
      return 'NO';
    }
  }
  return result;
}
// 개선사항 : string 받은 것을 처음부터 .toLowerCase() 또는 .toUpperCase()를 함.

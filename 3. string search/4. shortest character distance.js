function solution(str, c) {
  if (str.indexOf(c) === -1) return 'EMPTY';
  const result = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    let rightMin = len;
    let leftMin = len;
    for (let j = i; j < len; j++) {
      if (str[j] === c) {
        rightMin = j - i;
        // console.log('i : ' + i + ', rightMin : ' + rightMin);
        break;
      }
    }
    for (let k = i - 1; k >= 0; k--) {
      if (str[k] === c) {
        leftMin = i - k;
        // console.log('i : ' + i + ', leftMin : ' + leftMin);
        break;
      }
    }
    result.push(Math.min(rightMin, leftMin));
  }
  return result;
}
// 시간 복잡도는 O(n^2)가 되어, 구현성에 있어서는 만들어보는 것이 좋으나 효율적이지 않다.

function solution(str, c) {
  let answer = [];
  let len = str.length;
  let min = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === c) {
      min = 0;
      answer.push(0);
    } else {
      min++;
      answer.push(min);
    }
  }

  min = str.length;
  for (let j = len - 1; j >= 0; j--) {
    if (str[j] === c) {
      min = 0;
    } else {
      min++;
      answer[j] = Math.min(answer[j], min);
    }
  }
  return answer;
}

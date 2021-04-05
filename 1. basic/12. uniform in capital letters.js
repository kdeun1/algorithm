function solution(str) {
  return str.toUpperCase();
}

function solution(str) {
  let answer = '';
  for (let i of str) {
    if (i === i.toLowerCase()) {
      answer += i.toUpperCase();
    } else {
      answer += i;
    }
  }
  return answer;
}

function solution(str) {
  let answer = '';
  for (let i of str) {
    let asciiNum = i.charCodeAt();
    if (asciiNum >= 97 && asciiNum <= 122) {
      answer += String.fromCharCode(asciiNum - 32);
    } else {
      answer += i;
    }
  }
  return answer;
}

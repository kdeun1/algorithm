function solution(arr) {
  let answer = 0;
  let maxSumDigits = 0;
  let sumDigits = (n) => {
    if (n < 10) return n;
    let sum = 0;
    while (n > 0) {
      sum += (n % 10);
      n = Math.floor(n / 10);
    }
    return sum;
  }
  for (let i of arr) {
    const iSumDigits = sumDigits(i);
    if (maxSumDigits <= iSumDigits && answer < i) {
      maxSumDigits = iSumDigits;
      answer = i;
    }
  }
  return answer;
}
// while문 조건을 굳이 0보다 크다를 안해도 됨
// sum > max, sum === max인 로직으로 나누는게 더 나아보임

function solution(arr) {
  let answer, max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0, tmp = x;
    while (tmp) {
      sum += (tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) {
        answer = x;
      }
    }
  }
  return answer;
}

function solution(arr) {
  let answer, max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) {
        answer = x;
      }
    }
  }
  return answer;
}
// 숫자를 문자열로 쪼갠 후 reduce로 합산하는 방식

function solution(arr) {
  let answer = [];
  const reverseNum = (num) => Number(num.toString().split('').reverse().join(''));
  const isPrimeNumber = (n) => {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    for (let i = 4; i < n - 1; i++) {
      if (Number.isInteger(n / i)) return false;
    }
    return true;
  }

  for (let i of arr) {
    let reversedNum = reverseNum(i);
    if (isPrimeNumber(reversedNum)) {
      answer.push(reversedNum);
    }
  }
  return answer;
}

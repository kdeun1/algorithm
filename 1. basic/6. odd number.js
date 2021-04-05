function answer(arr) {
  let answer = [];
  let oddArr = arr.filter((v) => Math.floor(v % 2) === 1);
  let oddMin = Math.min(...oddArr);
  let oddSum = oddArr.reduce((acc, cur) => {
    acc += cur
    return acc;
  });
  answer.push(oddSum);
  answer.push(oddMin);
  return answer;
}


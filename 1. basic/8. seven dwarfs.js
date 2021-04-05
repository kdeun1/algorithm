function solution(arr) {
  let result = '없음';
  for (let i = 8; i >= 1; i--) {
    for (let j = i - 1; j >= 0; j--) {
      let result = arr.map(v => v);
      result.splice(i, 1);
      result.splice(j, 1);
      let resultSum = result.reduce((acc, cur) => acc + cur, 0);
      if (resultSum === 100) return result;
    }
  }
  return result;
}

function solution(arr){
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for(let i = 0; i < 8; i++){
    for(let j = i + 1; j < 9; j++){
      if((sum - (answer[i] + answer[j])) === 100){
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
function solution(pNum, excludedSeq) {
  const queue = [];
  let temp = null;
  for (let i = 1; i <= pNum; i++) {
    queue.push(i);
  }
  while (queue.length > 1) {
    for (let i = 0; i < excludedSeq; i++) {
      temp = queue.shift();
      if (i !== excludedSeq - 1) {
        queue.push(temp);
      }
    }
  }
  return queue[0];
}

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }
  return answer;
}

solution(8, 3); // 7


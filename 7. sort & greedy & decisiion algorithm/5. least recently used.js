function solution(size, arr) {
  const cache = new Array(size).fill(0);
  for (let n of arr) {
    const idx = cache.indexOf(n);
    if (idx < 0) {
      cache.pop();
      cache.unshift(n);
    } else {
      for (let i = idx; i > 0; i--) {
        cache[i] = cache[i - 1];
      }
      cache[0] = n;
    }
    console.log(`cache : ${cache}`);
  }
  return cache;
}

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach(x => {
    let pos = -1;
    // pos 찾기, answer에 존재하는지 확인, 존재한다면 index값을 pos에 넣기
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) {
        pos = i;
      }
    }
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]); // [7, 5, 3, 2, 6]
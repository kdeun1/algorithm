function solution(str) {
  let map = new Map();
  for (let c of str) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }
  return [...map].reduce((acc, cur) => acc[1] > cur[1] ? acc : cur)[0];
}

solution('BACBACCACCBDEDE')

function solution(s) {
  let answer;
  let sh = new Map();
  for (let x of s) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sh) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
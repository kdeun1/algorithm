function solution(first, second) {
  const map = new Map();
  for (let c of first) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }
  for (let c of second) {
    if (!map.has(c) || map.has(c) === 0) {
      return 'NO';
    } else {
      map.set(c, map.get(c) - 1);
    }
  }
  return !!Math.max(...map.values()) ? 'YES' : 'NO';
}

function solution(str1, str2) {
  let answer = 'YES';
  let sh = new Map();
  for (let x of str1) {
    if (sh.has(x)) {
      sh.set(x, sh.get(x) + 1);
    } else {
      sh.set(x, 1);
    }
  }
  for (let x of str2) {
    if (!sh.has(x) || sh.get(x) === 0) {
      return 'NO';
    }
    sh.set(x, sh.get(x) - 1);
  }
  return answer;
}

solution('AbaAeCe', 'baeeACA');
solution('abaCC', 'Caaab');
function solution(sStr, tStr) {
  let answer = 0;
  const isSameMap = (map1, map2) => {
    if (map1.size !== map2.size) {
      return false;
    }
    for (let [key, value] of map1) {
      if (!map2.has(key) || map2.get(key) !== value) {
        return false;
      }
    }
    return true;
  };

  const tStrAnagramMap = new Map();
  for (let c of tStr) {
    if (!tStrAnagramMap.has(c)) {
      tStrAnagramMap.set(c, 1);
    } else {
      tStrAnagramMap.set(c, tStrAnagramMap.get(c) + 1);
    }
  }

  let pointerStart = 0;
  // let pointerEnd = 0;
  let substringMap = new Map();
  for (let pointerEnd = 0; pointerEnd < sStr.length; pointerEnd++) {
    if (!substringMap.has(sStr[pointerEnd])) {
      substringMap.set(sStr[pointerEnd], 1);
    } else {
      substringMap.set(sStr[pointerEnd], substringMap.get(sStr[pointerEnd]) + 1);
    }
    if (pointerEnd - pointerStart === tStr.length - 1) {
      if (isSameMap(tStrAnagramMap, substringMap)) {
        answer++;
      }
      if (substringMap.get(sStr[pointerStart]) === 1) {
        substringMap.delete(sStr[pointerStart]);
      } else {
        substringMap.set(sStr[pointerStart], substringMap.get(sStr[pointerStart]) - 1);
      }
      pointerStart++;
    }
  }
  return answer;
}

solution('bacaAacba', 'abc'); // 3

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let th = new Map();
  let sh = new Map();

  // th에 값 세팅
  for (let x of t) {
    if (th.has(x)) th.set(x, th.get(x) + 1);
    else th.set(x, 1);
  }

  // len -1 개수만큼 sh에 값 세팅
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sh.has(s[i])) {
      sh.set(s[i], sh.get(s[i]) + 1);
    } else {
      sh.set(s[i], 1);
    }
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // t개수만큼 값 세팅
    if (sh.has(s[rt])) {
      sh.set(s[rt], sh.get(s[rt]) + 1);
    } else {
      sh.set(s[rt], 1);
    }
    // 이때 th와 sh를 비교
    if (compareMaps(sh, th)) {
      answer++;
    }
    // lt의 값 빼줌
    sh.set(s[lt], sh.get(s[lt]) - 1);
    // sh의 map의 value가 0인 경우 삭제
    if (sh.get(s[lt]) === 0) {
      sh.delete(s[lt]);
    }
    // lt의 값을 빼준 뒤에 lt를 증감
    lt++;
  }
  return answer;
}

solution('bacaAacba', 'abc'); // 3
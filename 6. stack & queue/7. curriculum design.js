function solution(reqSub, allSub) {
  const queue = [...reqSub];
  for (let c of allSub) {
    if (queue.includes(c) && c !== queue.shift()) {
      return 'NO';
    }
  }
  if (queue.length) {
    return 'NO';
  }
  return 'YES';
}

solution('CBA', 'CBDAGE');
solution('CBA', 'CFBDAGE'); // YES
solution('CBA', 'CFBDAGEH'); // YES
solution('BCA', 'CFBDAGEH'); // NO
solution('BCA', 'CFBDGEH'); // NO
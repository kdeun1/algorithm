function solution(n) {
  function DFS({ val, flag, log }) {
    if (flag) {
      log += String(val);
    }
    if (val === n) {
      console.log(log);
      return;
    }
    val++;
    DFS({ val, flag: true, log });
    DFS({ val, flag: false, log });
  }

  for (let initNum = 1; initNum <= n; initNum++) {
    DFS({ val: initNum, flag: true, log: '' });
  }
}

solution(3);
solution(4);

function solution(n) {
  let answer;
  let ch = Array.from({ length: n+1 }, () => 0);
  function DFS(v) {
    if (v === n+1) { // 종착점
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          tmp += i+' ';
        }
      }
      console.log(tmp);
    } else {
      ch[v] = 1; // 포함시킨다.
      DFS(v+1);
      ch[v] = 0; // 포함안시킨다.
      DFS(v+1);
    }
  }
  DFS(1);
  return answer;
}
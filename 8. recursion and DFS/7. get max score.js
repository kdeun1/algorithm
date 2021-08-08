function solution(limitTime, scoreTimeArr) {
  let maxScore = 0;
  const arrLen = scoreTimeArr.length;

  function DFS(idx, flag, sumScore, sumTime) {
    if (flag) {
      sumScore += scoreTimeArr[idx][0];
      sumTime += scoreTimeArr[idx][1];
    }
    if (idx === arrLen - 1) {
      if (sumTime <= limitTime) {
        maxScore = Math.max(maxScore, sumScore);
      }
      return;
    }
    idx++;
    DFS(idx, true, sumScore, sumTime);
    DFS(idx, false, sumScore, sumTime);
  }

  DFS(0, true, 0, 0);
  DFS(0, false, 0, 0);
  return maxScore;
}

solution(20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]); // 41


function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L+1, sum+ps[L], time+pt[L]);
      DFS(L+1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]); // 41


function solution(truckWeight, clogArr) {
  let maxWeight = 0;
  let clogCnt = clogArr.length;
  function DFS(idx, sumWeight, flag) {
    if (flag) {
      sumWeight += clogArr[idx];
    }
    if (idx === clogCnt - 1) {
      maxWeight = maxWeight <= truckWeight && Math.max(maxWeight, sumWeight);
      return;
    }
    idx++;
    DFS(idx, sumWeight, true);
    DFS(idx, sumWeight, false);
  }

  DFS(0, 0, true);
  DFS(0, 0, false);
  return maxWeight;
}

solution(259, [81, 58, 42, 33, 61]); // 242

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

solution(259, [81, 58, 42, 33, 61]); // 242

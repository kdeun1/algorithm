function solution(coinArr, totalPrice) {
  let answer = Number.MAX_SAFE_INTEGER;
  const coinTypeCnt = coinArr.length;

  function DFS(L, restPrice) {
    if (restPrice < 0) return;
    if (restPrice === 0) {
      answer = Math.min(answer, L);
    } else {
      for (let coinPrice of coinArr) {
        DFS(L + 1, restPrice - coinPrice);
      }
    }
  }

  DFS(0, totalPrice);
  return answer;
}

solution([1, 2, 5], 15); // 3
solution([1, 2, 5], 18); // 5
solution([1, 5, 12], 15); // 3

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return; // cut edge
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L+1, sum+arr[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

solution(15, [1, 2, 5]); // 3
solution(18, [1, 2, 5]); // 5
solution(15, [1, 5, 12]); // 3
function solution(board, moves) {
  let answer = 0;
  const len = board.length;
  const maxHeights = new Array(len).fill(0); // [0, 0, 0, 0, 0]
  const stack = [];

  for (let row of board) {
    for (let n = 0; n < len; n++) {
      if (row[n] === 0) {
        maxHeights[n]++; // [4, 2, 2, 3, 3]
      }
    }
  }

  for (let n of moves) {
    let idx = n - 1;
    let mh = maxHeights[idx];
    if (mh !== len) {
      let selectedVal = board[mh][idx];
      let lastValInStack = stack[stack.length - 1];
      if (lastValInStack === selectedVal) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(selectedVal);
      }
      maxHeights[idx]++;
    }
  }

  return answer;
}

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach(pos => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        break;
      }
    }
  });
  return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);
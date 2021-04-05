function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let aInfo = arr1[i];
    let bInfo = arr2[i];
    if (aInfo === bInfo) {
      result.push('D');
    } else if (aInfo - bInfo === 1 || aInfo - bInfo === -2) {
      result.push('A');
    } else {
      result.push('B');
    }
  }
  return result;
}
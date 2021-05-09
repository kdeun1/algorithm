function solution(arr1, arr2) {
  const answer = [];
  let left = 0;
  let right = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] === arr2[right]) {
      answer.push(arr1[left]);
      left++;
      right++;
    } else if (arr1[left] > arr2[right]) {
      right++;
    } else {
      left++;
    }
  }

  return answer;
}
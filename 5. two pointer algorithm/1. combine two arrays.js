function solution(arr1, arr2) {
  const answer = [];
  let left = 0;
  let right = 0;
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      answer.push(arr1[left]);
      left++;
    } else if (arr1[left] > arr2[right]) {
      answer.push(arr2[right]);
      right++;
    } else {
      answer.push(arr1[left]);
      answer.push(arr2[right]);
      left++;
      right++;
    }
  }
  while (left < arr1.length) {
    answer.push(arr1[left]);
    left++;
  }
  while (right < arr2.length) {
    answer.push(arr2[right]);
    right++;
  }

  return answer;
}
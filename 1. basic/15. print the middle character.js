function solution(str) {
  let result = '';
  const sl = str.length;
  if (sl % 2 !== 0) {
    result = str[(sl - 1) / 2];
  } else {
    result = str[(sl / 2) - 1] + str[sl / 2];
  }
  return result;
}

function solution(s){
  let result;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) result = s.substring(mid, mid + 1);
  else result = s.substring(mid - 1, mid + 1);
  return result;
}

function solution(s){
  let result;
  let mid = Math.floor(s.length / 2);
  if(s.length % 2 === 1) result = s.substr(mid, 1);
  else result = s.substr(mid - 1, 2);
  return result;
}

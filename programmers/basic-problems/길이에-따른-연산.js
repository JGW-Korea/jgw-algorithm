function solution(num_list) {
  // 배열의 길이가 11이상이면, 모든 원소의 합을 반환한다.
  if(num_list.length >= 11) {
    return num_list.reduce((total, curr) => total += curr, 0);
  }

  // 배열의 길이가 11미만이면, 모든 원소의 곱을 반환한다.
  return num_list.reduce((total, curr) => total *= curr, 1);
}
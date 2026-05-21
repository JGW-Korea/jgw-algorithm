function solution(num_list, n) {
  // 분할 정복
  let left = [...num_list.slice(n)];      // N번째 이후로 나눈 원소들
  let right = [...num_list.slice(0, n)];  // N번째 이전까지 나눈 원소들

  return [ ...left, ...right ];
}
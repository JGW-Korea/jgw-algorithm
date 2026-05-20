function solution(arr, k) {
  // k가 홀수라면 arr의 모든 원소에 k를 곱한 결과를 반환한다.
  if(k % 2 === 1) {
    return arr.map(el => el * k);
  }

  // k가 홀수가 아니라면, arr의 모든 원소에 k를 더한 결과를 반환한다.
  return arr.map(el => el + k);
}
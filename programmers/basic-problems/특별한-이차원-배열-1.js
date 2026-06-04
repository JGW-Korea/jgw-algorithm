function solution(n) {
  const answer = Array.from({ length: n }, () => new Array(n).fill(0));

  for(let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
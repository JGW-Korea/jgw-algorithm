function solution(arr, intervals) {
  const answer = [];

  for(const [start, end] of intervals) {
    answer.push(...arr.slice(start, end + 1));
  }

  return answer
}
function solution(num_list, n) {
  const answer = [];
  
  for(let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  
  return answer;
  
  // 한 줄 로직
  // return num_list.slice(0, n);
}
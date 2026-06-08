function solution(num_list) {
  const answer = [...num_list];
  
  const lastValue = num_list[num_list.length - 1];
  const lastPrevValue = num_list[num_list.length - 2];

  if(lastValue < lastPrevValue) answer.push(lastValue * 2);
  else {
    answer.push(lastValue - lastPrevValue);
  }
  
  return answer;
}
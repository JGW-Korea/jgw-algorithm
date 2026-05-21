function solution(todo_list, finished) {
  const answer = [];
    
  // todo_list와 finished 길이는 같다.
  for(let i = 0; i < todo_list.length; i++) {
    // 아직 하지 못한 일들을 순서대로 담는다.
    if(!finished[i]) {
      answer.push(todo_list[i]);
    }
  }

  return answer;
}
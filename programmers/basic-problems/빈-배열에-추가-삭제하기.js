function solution(arr, flag) {
  const answer = [];

  for(let i = 0; i < flag.length; i++) {
    let number = arr[i];
    
    // Flag가 True라면, arr[i] * 2만큼 원소 추가
    if(flag[i]) {
      for(let loop = 0; loop < number * 2; loop++) {
        answer.push(number);
      }
    }
    
    // Flag가 Flase라면, arr[i]만큼 원소 제거
    else {
      for(let loop = 0; loop < number; loop++) {
        answer.pop();
      }
    }
  }

  return answer;
}
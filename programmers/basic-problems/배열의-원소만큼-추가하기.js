function solution(arr) {
  const answer = [];

  // 완전 탐색
  // - 입력으로 주어진 arr의 앞에서부터 차례대로 원소를 보면서,
  // - 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i]; j++) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
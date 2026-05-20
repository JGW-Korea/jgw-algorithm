function solution(arr) {
  let prevNumberArray = [...arr]; // 조건에 따라 값을 수정하기 이전의 원소를 가진 배열
  let nextNumberArray = [...arr]; // 조건에 따라 값이 수정된 이후의 원소를 가진 배열
  
  let answer = 0;

  // 무한 반복을 통해 다음과 같은 과정을 진행한다.
  // 1. 입력으로 주어진 정수 배열을 조건에 따라 값을 수정한다.
  // 2. 값을 수정하기 이전 배열과, 값을 수정한 이후 배열의 모든 원소의 값이 동일한지 비교한다.
  while(true) {
    // 1. 현재 정수 배열을 조건에 따라 값을 수정한다.
    for(let i = 0; i < prevNumberArray.length; i++) {
      // 원소가 50 이상이면서, 짝수인 경우
      if(prevNumberArray[i] >= 50 &&  prevNumberArray[i] % 2 === 0) {
        nextNumberArray[i] = Math.floor(prevNumberArray[i] / 2);
      }

      // 원소가 50 미만이면서, 홀수인 경우
      else if(prevNumberArray[i] < 50 &&  prevNumberArray[i] % 2 === 1) {
        nextNumberArray[i] = (prevNumberArray[i] * 2) + 1;
      }

      // 조건이 모두 맞지 않은 경우
      else {
        nextNumberArray[i] = prevNumberArray[i];
      }
    }

    // 2. 값을 수정하기 이전 배열과, 값을 수정한 이후 배열의 모든 원소의 값이 동일한지 비교한다.
    let flag = false;
    for(let i = 0; i < prevNumberArray.length; i++) {
      if(prevNumberArray[i] !== nextNumberArray[i]) {
        flag = true;
        break;
      }
    }

    if(!flag) return answer;
    else {
      prevNumberArray = [ ...nextNumberArray ];
      answer += 1;
    }
  }
}
function solution(num_str) {
  const numList = num_str.split("").map(Number);

  // 반복문을 통해 배열의 각 인덱스에 접근하여 자리수의 합을 구한다.
  let answer = 0;
  for(const num of numList) {
    answer += num;
  }
  
  return answer;


  // 내장 메서드를 활용한 한 줄 로직 -> 보기 불편함
  // return num_str.split("").map(Number).reduce((curr, next) => curr + next, 0);
}
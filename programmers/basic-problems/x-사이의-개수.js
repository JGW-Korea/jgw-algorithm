function solution(myString) {
  const answer = [];
  
  // 입력으로 주어진 myString을 x를 기준으로 나눈 뒤, 나눠진 문자열의 각각의 길이를 저장한다.
  myString.split("x").forEach((splitted) => {
    answer.push(splitted.length);
  });
  
  return answer;
}
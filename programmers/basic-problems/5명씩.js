function solution(names) {
  const answer = [];

  // 5명씩 그룹을 묶은 리스트를 구성한다.
  for(let i = 0; i < names.length; i += 5) {
    answer.push(names.slice(i, i + 5));
  }

  // 각 그룹의 가장 앞에 있는 사람의 이름만 포함한 결과를 반환한다.
  return answer.map((el) => el[0]);
}
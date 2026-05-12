// 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 반환
// -> 결국 값을 도출하기 위해서는 최종적으로 오름차순으로 정렬된 배열을 반환해야 됨
// -> 그렇기 때문에 처음부터 입력으로 주어진 배열을 오름차순으로 정렬 시킨 뒤, 5번째부터 연결시킨 배열을 반환시키면 됨
function solution(num_list) {
  // 스프레드 문법을 통해 배열을 복사한 뒤, 오름차순 정렬 진행
  // 이는 JavaScript Array 객체의 sort 메서드는 원본 배열의 값이 변경되는 부수효과가 있음
  // 코딩 테스트 문제를 풀기 위해서는 굳이 신경 쓰지 않아도 되는 문제이지만, 습관이 잘못 길러질 수 있다고 생각
  const tempNumList = [ ...num_list ].sort((a, b) => a - b);

  // 정렬 시킨 뒤, 배열의 slice 메서드를 활용해서 바로 반환 가능
  // return tempNumList.slice(5);

  const answer = [];

  // 직관적인 코드가 좋은 경우 -> 반복문
  for(let i = 5; i < tempNumList.length; i++) {
    answer.push(tempNumList[i]);
  }

  return answer;
}
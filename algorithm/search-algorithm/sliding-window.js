/**
 * 연속적인 데이터 구간에서 최대 합을 도출하기 위한 슬라이딩 알고리즘 예시
 * @param {number[]} arr : 연속적인 데이터
 * @param {number} k : 고정된 구간
 */ 
function solution(arr, k) {
  let sum = 0;

  // 초기 구간에 대한 합계를 구하며, 문제에서 요구하는 최대값의 기준값이 된다.
  for(let start = 0; start < k; start++) {
    sum += arr[start];
  }

  // 초기 구간 이후 전체 구간에 대한 최대값을 도출한다.
  let answer = sum;
  for(let end = k; end < arr.length; end++) {
    sum += arr[end];      // 구간이 한 칸 이동하면서 추가된 새로운 구간에 대한 값을 더해준다.
    sum -= arr[end - k];  // 구간에서 제외되는 값을 감소시킨다.

    if(answer < sum) {
      answer = sum;
    }
  }

  return answer;
}

console.log(solution([1, 5, 4, 2, 9], 4));
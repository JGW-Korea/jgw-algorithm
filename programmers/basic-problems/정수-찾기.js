function solution(num_list, n) {
  // JavaScript Array 객체의 includes는 배열의 시작부터 마지막까지 인자로 전달된 값이 있는지 판별하는 함수이다.
  // 이를 통해 반복문 로직을 작성하지 않아도 값을 쉽게 찾을 수 있다.
  // 또한 시간 복잡도는 선형 탐색과 동일하게 O(N)이다. 이는 includes 또한 내부적으로 선형 탐색으로 값을 찾기 때문이다.
  if(num_list.includes(n)) {
    return 1;
  }

  return 0;
}

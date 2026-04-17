function solution(arr) {
  // N x N 크기의 배열을 가졌기 때문에, 배열의 열 길이의 값을 통해 이중 반복문(arr[i][j] === arr[j][i] 비교하기 위함)을 수행한다.
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      // 반복문 내에서 비교 결과가 하나라도 일치하지 않은 경우, 바로 0을 반환하여 수행 시간을 줄인다.
      if(arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }

  return 1; // 모두 일치한 경우 1을 반환한다.
}
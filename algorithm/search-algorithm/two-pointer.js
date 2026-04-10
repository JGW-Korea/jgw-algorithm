// 두 구간의 합이 num 이상인 경우를 구하는 함수
function solution(arr, num) {
  let result = 0;

  let [p1, p2] = [0, 0];  // 두 개의 포인터를 둔다.
  let sum = arr[0];       // 두 구간의 합

  // 두 포인터를 이동시켜 구간의 합을 계산한다.
  while(p1 < arr.length && p2 < arr.length) {
    // 구간의 합이 num보다 미만인 경우
    if(sum < num) {
      p2 += 1;
      
      // 구간의 끝을 가리키는 p2 포인터의 값이 증가하면서 배열의 범위를 넘을 수도 있기 때문에,
      // 조건문을 활용하여 예외 처리를 수행해준다. 이를 해주지 않을 경우 NaN(sum + undefined)이 될 수도 있기 때문
      if(p2 < arr.length) {
        sum += arr[p2];
      }
    }

    // 구간의 합이 num보다 이상인 경우
    else {
      result += 1;
      sum -= arr[p1];
      p1 += 1;
    }
  }

  return result;
}

console.log(solution([1, 2, 4, 3, 5, 2, 1, 2], 5));
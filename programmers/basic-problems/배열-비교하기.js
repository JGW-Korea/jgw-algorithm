function sumArray(arr) {
  return arr.reduce((total, curr) => total += curr, 0);
}

function solution(arr1, arr2) {
  // 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
  if(arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  // 두 배열의 길이가 같다면, 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
  else {
    const sum1 = sumArray(arr1);
    const sum2 = sumArray(arr2);

    if(sum1 === sum2) return 0;
    else {
      return sum1 > sum2 ? 1 : -1;
    }
  }
}
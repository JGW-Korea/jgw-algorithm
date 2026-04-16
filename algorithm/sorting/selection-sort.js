function selectionSort(arr) {
  const copyArr = [ ...arr ];

  // 배열의 첫 번째부터 시작하여, 끝까지 탐색하는 회전 구간을 나타낸다.
  for(let i = 0; i < copyArr.length - 1; i++) {
    let minIndex = i;

    // 정렬 기준에 따라 우선순위가 가장 높은 원소의 위치를 탐색한다.
    for(let j = i + 1; j < copyArr.length; j++) {
      // 정렬 기준 -> 오름차순
      if(copyArr[j] < copyArr[minIndex]) {
        minIndex = j;
      }

      // 정렬 기준 -> 내림차순
      // if(copyArr[j] > copyArr[maxIndex]) {
      //   maxIndex = j
      // }
    }

    // 정렬 기준에 따라 우선순위가 가장 높은 원소의 위치와 현재 위치의 값을 교환한다.
    [copyArr[i], copyArr[minIndex]] = [copyArr[minIndex], copyArr[i]];
    // [copyArr[i], copyArr[maxIndex]] = [copyArr[maxIndex], copyArr[i]];
  }

  return copyArr;
}

console.log(selectionSort([3, 2, 1, 4, 5]));
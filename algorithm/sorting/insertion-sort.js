// 삽입 정렬 알고리즘 로직
function insertionSort(arr) {
  const copyArr = [ ...arr ];

  // 삽입 정렬 시작 시, 첫 번째 원소를 S(Sorted) 부분 집합으로 보기 때문에, 두 번째 원소부터 시작한다.
  for(let i = 1; i < copyArr.length; i++) {
    // 정렬되지 않은 부분 집합 U(Unsorted) 포함된 값들과 비교하여 정렬 조건에 맞는 위치에 삽입(정확히는 교환)한다.
    for(let j = i; j > 0; j--) {
      if(copyArr[j] < copyArr[j - 1]) {
        [copyArr[j], copyArr[j - 1]] = [copyArr[j - 1], copyArr[j]];
      }
    }
  }

  return copyArr;
}

console.log(insertionSort([3, 2, 1, 4, 5]));
// 병합 정렬 -> 결합(Combine) 과정
function mergeSortCombine(left, right) {
  const sortedArr = [];
  
  while (left.length && right.length) {
    // 정렬 기준 -> 오름차순
    if (left[0] <= right[0]) sortedArr.push(left.shift())
    else {
      sortedArr.push(right.shift());
    }

    // 정렬 기준 -> 내림차순
    // if (left[0] >= right[0]) sortedArr.push(left.shift())
    // else {
    //   sortedArr.push(right.shift());
    // }
  }
  
  return [...sortedArr, ...left, ...right]; // left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
}

// 병합 정렬 -> 분할(Divide) 단계와 정복(Conquer) 단계를 수행
function mergeSort(arr) {
	// 재귀 종료 조건
	// -> 더 이상 나눌 수 없는 문제를 해결한 결과를 반환한다.
	if(arr.length === 1) {
		return arr;
	}
	
	// 재귀 유도 부분
	else {
		const mid = Math.floor(arr.length / 2); // 배열을 좌우로 구분하기 위해 중간 값을 계산
		
		// 주어진 배열을 분할시킨다.
		const [left, right] = [arr.slice(0, mid), arr.slice(mid)];
		
		return mergeSortCombine(mergeSort(left), mergeSort(right));
	}
}
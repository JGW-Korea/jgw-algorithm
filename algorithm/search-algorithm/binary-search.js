// 반복문을 활용한 이진 탐색(Binary Search) 로직
function iterationBinarySearch(arr, target) {
	const copyArr = [ ...arr ].sort((a, b) => a - b); // 주어진 배열을 정렬시킨다.
	
	// 탐색 범위를 지정한다.
	let left = 0;
	let right = copyArr.length - 1;
	
	while(left <= right) {
		const mid = Math.floor((left + right) / 2);
		
		// 탐색 범위 중간 위치에 찾고자 하는 값이 있는지 확인한다.
		if(copyArr[mid] === target) {
			return true;
		}
		
		if(target < copyArr[mid]) right = mid - 1; // 찾고자 하는 값보다 중간 값이 클 경우
		else {
			left = mid + 1; // 찾고자 하는 값이 중간 값보다 작을 경우
		}
	}
	
	return false; // 배열에 찾고자 하는 값이 없을 경우
}

// 재귀를 활용한 이진 탐색(Binary Search) 로직
function recursionBinarySearch(arr, target, left, right) {
	if(left > right) return false; // 배열에 찾고자 하는 값이 없을 경우
	
	const mid = Math.floor((left + right) / 2); // 배열의 중간 위치를 구한다.
	
	// 탐색 범위 중간 위치에 찾고자 하는 값이 있는지 확인한다.
	if(arr[mid] === target) {
		return true;
	}
	
	if(target < arr[mid]) return binarySearch(arr, target, left, mid - 1); // 찾고자 하는 값보다 중간 값이 클 경우
	else {
		return binarySearch(arr, target, mid + 1, right); // 찾고자 하는 값이 중간 값보다 작을 경우
	}
}
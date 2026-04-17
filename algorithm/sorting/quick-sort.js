function quickSort(arr) {
	// 재귀 종료 조건
	// -> 배열을 나눌 수 없을 때까지 분할한다.
	if(arr.length < 2) {
		return arr;
	}
	
	const pivot = [arr[0]]; // 주어진 배열을 반으로 나눌 Pivot 구간을 지정한다.
	const left = [];        // Pivot보다 작은 값들은 left 배열에 원소를 추가한다.
	const right = [];       // Pivot보다 작은 값들은 left 배열에 원소를 추가한다.
	
	// 배열을 순회하면서, Pivot을 기준으로 작은 값은 left, 큰 값은 right, 동일한 값은 pivot에 추가한다.
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] < pivot[0]) left.push(arr[i]);
		else if(arr[i] > pivot[0]) right.push(arr[i]);
		else {
			pivot.push(arr[i]);
		}
	}
	
  // console.log(`left: ${left.join(" ")} / pivot: ${pivot.join(" ")} / right: ${right.join(" ")}`)

	// 배열을 Pivot을 기준으로 나눌 수 없을 때까지 분할한 후, 각 부분을 결합한 결과를 반환한다.
	return [...quickSort(left), ...pivot, ...quickSort(right)];
}

// console.log(quickSort([3, 2, 1, 4, 5]));
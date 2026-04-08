function solution(N, M) {
	const permutation = Array.from({ length: N }, () => 0);
	
	// 순열 조합 시 사용하고 있는 숫자는 더 사용하지 않기 위한 가지치기를 위한 배열 생성
	const isUsed = Array.from({ length: N + 1 }, () => false);
	
	// DFS를 활용하여 문제에서 요구하는 경우의 수를 구하기 위한 백트래킹 탐색 로직
	function dfs(currentLength) {
		// 선택을 끝까지 이어 만들어 하나의 경우의 수를 생성한 경우
		if(currentLength === M) {
			console.log(permutation.join(""));
			return;
		}
		
		for(let i = 1; i < N + 1; i++) {
			if(!isUsed[i]) {
				permutation[currentLength] = i;
				isUsed[i] = true;       // i번 숫자를 사용하고 있다고 표시하여, 이후 탐색을 차단시킨다.
				dfs(currentLength + 1); // 현재 선택 이후 다음 선택을 하기 위해 깊이를 내려간다.
				isUsed[i] = false;      // i번 숫자를 복구하여, 이후 탐색에 활용할 수 있도록 복원한다.
			}
		}
	}

  dfs(0);
}
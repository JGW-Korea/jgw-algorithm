function solution(arr) {
  const stk = [];

  for(let i = 0; i < arr.length; i++) {
    // 1. stk이 빈 배열이라면, arr[i]를 stk에 추가한다.
    if(stk.length === 0) {
      stk.push(arr[i]);
    }

    // 2. stk이 빈 배열이 아니고 stk의 마지막 원소가 arr[i]와 같다면, stk의 마지막 원소를 제거한다.
    else if(stk.at(-1) === arr[i]) {
      stk.pop();
    }
    
    // 3. stk이 빈 배열이 아니고 stk의 마지막 원소가 arr[i]와 다르면, stk의 마지막 위치에 arr[i]를 추가한다.
    else {
      stk.push(arr[i]);
    }
  }

  return stk.length ? stk : [-1];
}
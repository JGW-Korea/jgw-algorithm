function solution(arr) {
  const stk = [];

  let i = 0;
  while(i < arr.length) {
    // 1. stk가 빈 배열이라면, arr[i]를 추가한다.
    if(stk.length === 0) {
      stk.push(arr[i]);
      i += 1;
    }

    // 2. stk가 빈 배열이 아니라면, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk 마지막 위치에 추가한다.
    else if(stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    }

    // 3. stk에 원소가 있는데, stk의 마지막 원소가 arr[i]보다 크거나 같으면, stk의 마지막 원소를 제거한다.
    else {
      stk.pop();
    }
  }

  return stk
}
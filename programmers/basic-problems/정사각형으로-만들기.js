function solution(arr) {
  const [row, column] = [arr[0].length, arr.length];

  if(row === column) return arr; // 입력으로 주어진 배열의 열과 행의 길이가 같은 경우

  const answer = [];

  // 입력으로 주어진 배열의 행이 열보다 작은 경우
  if(row < column) {
    for(let i = 0; i < column; i++) {
      answer.push([...arr[i], ...new Array(column - row).fill(0)]);
    }

    return answer;
  }

  // 입력으로 주어진 배열의 열이 행보다 작은 경우
  else {
    for(let i = 0; i < row; i++) {
      if(arr[i] !== undefined) answer.push([...arr[i]]);
      else answer.push(new Array(row).fill(0));
    }

    return answer;
  }
}
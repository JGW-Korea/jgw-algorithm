/**
 * 입력으로 주어진 arr의 길이가 홀짝에 따라 문제의 요구사항에 맞게 특정 인덱스 값에 접근하여 n의 값을 더하는 로직
 * @param {number[]} arr - 입력으로 주어진 arr
 * @param {number} n - 입력으로 주어진 n
 * @param {(i: number) => boolean} shouldAdd - 인덱스 접근 판별 콜백 함수
 * @returns {number}
*/
function addIf(arr, n, shouldAdd) {
  const temp = [...arr];

  for(let i = 0; i < temp.length; i++) {
    temp[i] = shouldAdd(i) ? temp[i] + n : temp[i];
  }

  return temp;
}

function solution(arr, n) {
  const isLengthOdd = arr.length % 2 === 1; // arr 길이 홀수 판별

  if(isLengthOdd) return addIf(arr, n, (i) => i % 2 === 0);
  else {
    return addIf(arr, n, (i) => i % 2 === 1);
  }
}
function solution(strArr) {
  // 문자열 배열의 원소 중 "ad" 부분 문자열을 포함하고 있는 원소를 제거하고 남은 문자열을 순서를 유지하여 반환
  return strArr.filter((el) => !el.includes("ad"));
}
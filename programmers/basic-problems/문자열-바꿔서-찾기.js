function solution(myString, pat) {
  // 입력으로 주어진 myString의 A와 B를 서로 교환한다.
  let swapMyString = ""
  for(const letter of myString) {
    swapMyString += letter === "A" ? "B" : "A";
  }

  // 서로 바꾼 문자열에 pat이 포함되어 있다면 1, 포함되어 있지 않다면 0을 반환한다.
  return swapMyString.includes(pat) ? 1 : 0;
}
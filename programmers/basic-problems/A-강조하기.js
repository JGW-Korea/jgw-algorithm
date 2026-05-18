function solution(my_string) {
  // 메서드 체이닝을 활용한다.
  // 1. toLowerCase()를 활용하여 모든 문자를 소문자로 치환된 문자열을 반환한다.
  // 2. 반환된 소문자 문자열에 replaceAll()을 활용하여 모든 a 문자를 A로 변경한 문자열을 반환한다.
  return my_string.toLowerCase().replaceAll("a", "A");
}
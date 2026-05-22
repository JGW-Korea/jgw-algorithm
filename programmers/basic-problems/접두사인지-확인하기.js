function solution(my_string, is_prefix) {
  // 한 줄 코드
  // return +my_string.startsWith(is_prefix);

  // 정석 코드
  for(let i = 0; i < is_prefix.length; i++) {
    if(my_string[i] !== is_prefix[i]) {
      return 0;
    }
  }

  return 1;
}
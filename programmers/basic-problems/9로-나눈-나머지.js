function solution(number) {
  let total = 0;

  for(const num of number) {
    total += Number(num);
  }

  return total % 9;
}
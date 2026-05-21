function solution(numbers, n) {
  let answer = 0;

  for(let i = 0; i < numbers.length; i++) {
    answer += numbers[i]; // numbers의 원소들을 앞에서부터 하나씩 더한다.

    // 합이 n보다 커지는 순간 지금까지의 총합을 반환한다.
    if(answer > n) {
      return answer
    }
  }
}
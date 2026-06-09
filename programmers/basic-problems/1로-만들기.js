function solution(num_list) {
  let answer = 0;

  for(let i = 0; i < num_list.length; i++) {
    let num = num_list[i];
    let total = 0;

    while(num !== 1) {
      num = num % 2 === 0 ? Math.floor(num / 2) : Math.floor((num - 1) / 2);

      total += 1;

      if(num === 1) {
        answer += total;
        break;
      }
    }
  }

  return answer;
}
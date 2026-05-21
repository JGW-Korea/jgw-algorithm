function solution(num_list) {
  let oddValueTotal = 0;   // 홀수 총합
  let evenValueTotal = 0;  // 짝수 총합

  for(let i = 0; i < num_list.length; i++) {
    let idx = i + 1;

    if(idx % 2 === 1) oddValueTotal += num_list[i];
    else {
      evenValueTotal += num_list[i];
    }
  }

  return Math.max(oddValueTotal, evenValueTotal);
}
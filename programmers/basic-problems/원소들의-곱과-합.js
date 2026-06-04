function solution(num_list) {
  let totalMultipl = 1;
  let totalSum = 0;

  for(let i = 0; i < num_list.length; i++) {
    totalMultipl *= num_list[i];
    totalSum += num_list[i];
  }
  
  return totalMultipl < Math.pow(totalSum, 2) ? 1 : 0;
}
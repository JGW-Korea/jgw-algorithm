function solution(num_list) {
  let oddNumber = "";
  let evenNumber = "";

  for(let i = 0; i < num_list.length; i++) {
    if(num_list[i] % 2 === 0) {
      evenNumber += num_list[i];
    } else {
      oddNumber += num_list[i];
    }
  }

  return Number(evenNumber) + Number(oddNumber);
}
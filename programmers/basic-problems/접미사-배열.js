function solution(my_string) {
  const answer = [];

  for(let i = 0; i < my_string.length; i++) {
    let suffix = "";

    for(let j = i; j < my_string.length; j++) {
      suffix += my_string[j];
    }

    answer.push(suffix);
  }

  return answer.sort();
}
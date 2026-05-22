function solution(l, r) {
  const answer = [];

  for(let i = l; i <= r; i++) {
    let splittedNumber = String(i).split("");
    let isFlag = false;

    for(const number of splittedNumber) {
      if(number === "0" || number === "5") continue;
      else {
        isFlag = true;
        break;
      }
    }

    if(!isFlag) {
      answer.push(i);
    }
  }

  return answer.length ? answer : [-1];
}
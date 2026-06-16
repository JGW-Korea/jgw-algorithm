function solution(myString, pat) {
  let answer = 0;

  for(let i = 0; i <= myString.length - pat.length; i++) {
    let isSame = true;

    for(let j = 0; j < pat.length; j++) {
      if(myString[i + j] !== pat[j]) {
        isSame = false;
        break;
      }
    }

    if(isSame) {
      answer += 1;
    }
  }

  return answer;
}
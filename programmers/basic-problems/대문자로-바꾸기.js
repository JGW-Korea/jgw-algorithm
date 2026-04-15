function solution(myString) {
  const answer = myString.split("");

  for(let i = 0; i < answer.length; i++) {
    const charCode = answer[i].charCodeAt();
    
    if(charCode >= 97 && charCode <= 122) {
      answer[i] = String.fromCharCode(charCode - 32);
    }
  }

  return answer.join("");

  // 한 줄 코드
  // return myString.toUpperCase()
}
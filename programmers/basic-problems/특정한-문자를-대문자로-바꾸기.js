function solution(my_string, alp) {
  const copyMyStringArr = my_string.split("");

  // 반복문을 통해 각 인덱스에 접근하여 해당 문자가 alp와 해당하는지 확인한다.
  const upperCaseAlphabet = String.fromCharCode(alp.charCodeAt() - 32);
  for(let i = 0; i < copyMyStringArr.length; i++) {
    if(copyMyStringArr[i] === alp) {
      copyMyStringArr[i] = upperCaseAlphabet;
    }
  }

  return copyMyStringArr.join("");
}
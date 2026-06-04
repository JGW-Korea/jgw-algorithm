const LOWER_CASE_L_ASCII_CODE_VALUE = "l".charCodeAt();

function solution(myString) {
  const temp = myString.split("").map(el => el.charCodeAt());

  for(let i = 0; i < temp.length; i++) {
    if(temp[i] < LOWER_CASE_L_ASCII_CODE_VALUE) {
      temp[i] = "l";
    } else {
      temp[i] = String.fromCharCode(temp[i]);
    }
  }

  return temp.join("");
}
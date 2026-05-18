function solution(myString, pat) {
  const [lowerMyString, lowerPat] = [myString.toLowerCase(), pat.toLowerCase()];
  return lowerMyString.includes(lowerPat) ? 1 : 0;
}
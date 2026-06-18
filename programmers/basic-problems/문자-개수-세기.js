function solution(my_string) {
  const letterCount = new Array(52).fill(0);
  
  for (const letter of my_string) {
    const letterAsciiCode = letter.charCodeAt() - 65;

    if(letterAsciiCode >= 0 && letterAsciiCode < 27) {
      letterCount[letterAsciiCode] += 1;
    } else {
      letterCount[letterAsciiCode - 6] += 1;
    }
  }

  return letterCount;
}
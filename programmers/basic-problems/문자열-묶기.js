function solutionA(strArr) {
  const answer = {};

  for(const letter of strArr) {
    answer[letter.length] = !answer[letter.length] ? 1 : answer[letter.length] + 1;
  }

  return Math.max(...Object.values(answer));
}

function solutionB(strArr) {
  return Math.max(
    ...strArr.reduce((arr, currentValue) => {
      arr[currentValue.length] += 1;
      return arr;
    }, new Array(31).fill(0))
  );
}
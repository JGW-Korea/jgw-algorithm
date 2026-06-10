function solutionA(arr) {
  if(!arr.includes(2)) return [-1];

  return arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
}

function solutionB(arr) {
  if(!arr.includes(2)) return [-1];

  let leftIndex = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 2) {
      leftIndex = i;
      break;
    }
  }

  let rightIndex = 0;
  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === 2) {
      rightIndex = i;
      break;
    }
  }

  const answer = [];
  for(let i = leftIndex; i < rightIndex + 1; i++) {
    answer.push(arr[i]);
  }

  return answer;
}
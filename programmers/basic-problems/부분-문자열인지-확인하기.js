function solutionA(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

function solutionB(my_string, target) {
  for(let i = 0; i <= my_string.length - target.length; i++) {
    let found = false;

    for(let j = 0; j < target.length; j++) {
      if(my_string[i + j] !== target[j]) {
        found = true;
        break;
      }
    }

    if(!found) {
      return 1;
    }
  }

  return 0;
}
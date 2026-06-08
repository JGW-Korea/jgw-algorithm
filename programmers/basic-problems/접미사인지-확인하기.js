function solutionA(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0
}

function solutionB(my_string, is_suffix) {
  for(let i = my_string.length - is_suffix.length; i < my_string.length; i++) {
    let found = false;

    for(let j = 0; j < is_suffix.length; j++) {
      if(my_string[i + j] !== is_suffix[j]) {
        found = true;
        break;
      }
    }

    if(!found) {
      return true;
    }
  }

  return false;
}
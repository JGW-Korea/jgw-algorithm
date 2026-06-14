function solutionA(my_string, s, e) {
  const answer = [ ...my_string.split("") ];

  let p1 = s;
  let p2 = e;

  while(p1 < p2) {
    [answer[p1], answer[p2]] = [answer[p2], answer[p1]];

    p1 += 1;
    p2 -= 1;
  }

  return answer.join("");
}

function solutionB(my_string, s, e) {
  const answer = [ ...my_string.split("") ];

  for(let i = s; i < Math.floor((s + e) / 2) + 1; i++) {
    let temp = answer[i];
    answer[i] = answer[(s + e) - i];
    answer[(s + e) - i] = temp;
  }

  return answer.join("");
}
function solution(my_string, s, e) {
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
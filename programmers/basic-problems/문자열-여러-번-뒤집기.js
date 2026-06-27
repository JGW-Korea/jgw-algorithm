function solution(my_string, queries) {
  const myStringArr = my_string.split("");

  for(const querie of queries) {
    const [x, y] = querie;

    for(let i = x; i <= Math.floor((x + y) / 2); i++) {
      const temp = myStringArr[i];
      myStringArr[i] = myStringArr[(x + y) - i];
      myStringArr[(x + y) - i] = temp;
    }
  }

  return myStringArr.join("");
}
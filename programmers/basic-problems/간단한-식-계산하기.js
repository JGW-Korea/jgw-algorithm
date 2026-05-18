function solution(binomial) {
  const [a, op, b] = binomial.split(" ").map((el) => Number.isNaN(Number(el)) ? el : Number(el));

  // op는 +, -, * 중 하나를 가진다.
  switch(op) {
    case "+": {
      return a + b;
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
  }
}
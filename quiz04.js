function calculator(num1, sign, num2) {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return 0;
  }
}

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5

module.exports = calculator;

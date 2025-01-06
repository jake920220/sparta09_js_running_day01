// 4. 계산기 문제
function 함수명(num1, operator, num2) {
  // 코드를 작성해주세요.
  switch (operator) {
    case "+":
      return console.log(num1 + num2);
    case "-":
      return console.log(num1 - num2);
    case "*":
      return console.log(num1 * num2);
    case "/":
      return console.log(num1 / num2);
  }
}

함수명(3, "+", 6); // 결과값 9
함수명(11, "-", 6); // 결과값 5
함수명(6, "*", 3); // 결과값 18
함수명(15, "/", 3); // 결과값 5

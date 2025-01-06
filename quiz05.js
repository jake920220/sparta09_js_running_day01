const calculator = require("./quiz04.js");

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function addThreePoint(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  scores.forEach((e, i, arr) => {
    arr[i] = calculator(e, "+", 3);
  });
}

addThreePoint(scores);

console.log("result: ", scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]

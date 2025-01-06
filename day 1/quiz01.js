// 1. 빈칸 채우기
// 1.
let uninitialized;
console.log("1-1 : ", uninitialized);
// 결과값 undefined - let으로 변수 선언은 되었지만, 할당이 되지 않음

// 2. < 빈칸 > apple = "사과";
const apple = "사과";
//apple = "바나나";
// TypeError: Assignment to constant variable
// const는 재선언, 재할당이 불가함, let이었다면 가능

// 3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log("1-3 : ", lotto[3]);
// 결과값 < 19 >  - 컴퓨터에서 시작은 0부터 시작, lotto 배열에서 index 3 즉 4번째 숫자

// 4.
let mySchedule = "";
console.log(mySchedule || false); // < false > ""은 falsy한 값, || 연산자를 사용했기 때문에 falsy한 값과 false 즉 false
console.log(!!mySchedule); // < false > 빈값은 falsy한 값이기 때문에 false

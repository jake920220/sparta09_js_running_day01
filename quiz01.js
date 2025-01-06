let uninitialized;
console.log(uninitialized); // undefined
// let에서 값을 설정하지 않았기 때문에 undefined가 출력된다.

const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const로 설정되어 값을 변경할 수 없다

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 : 19
// 인덱스의 3번째 자리인 19값이 출력된다.

let mySchedule = "";
console.log(mySchedule || false); // false
// mySchedule이 빈값이기 때문에 false가 출력됨
console.log(!!mySchedule); // false
// mySchedule이 빈값이기 때문에 false상태에서 true로 변환되고 다시 false로 변환되어 false가 출력됨

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "짝수";
  } else if (num % 2 !== 0) {
    return "홀수";
  } else {
    return "0";
  }
}

console.log(isEvenOrOdd(10)); // 결과값 "짝수";
console.log(isEvenOrOdd(7)); // 결과값 "홀수";

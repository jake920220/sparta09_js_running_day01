// 6. 장바구니 뒤바뀜 문제
function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

//const userBCart = userACart;
const coupon = { discount: 5000 };
const userBCart = deepCopy(userACart);

applyCoupon(userBCart, coupon);
console.log(userACart, userBCart);
// 실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// A,B 둘다 키보드 마우스에서 5000원 삭감된 키보드 : 25000, 마우스 : 15000원

// 1번의 결과에 대한 이유를 설명해보세요.
// userBcart가 userAcart가 같은 주소의 객체 값을 참조하기 때문에 userBcart에 함수를 적용하여 값이 달라지면 userAcart의 값도 똑같이 달라진다.

// 원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// 깊은 복사를 수행해야한다. 간단한 방법으로는 재귀를 사용한다.
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

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

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

// 실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// userACart와 userBCart는 같은 객체인 userACart를 참조합니다.

// 1번의 결과에 대한 이유를 설명해보세요.
// const userBCart = userACart;에서 userBCart는 userACart를 참조하는 변수로 설정된다.

// 원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// const userBCart = userACart;
// 위 부분처럼 참조하도록 하지 않고 얕은 복사를 사용하여 먼저 복사를 진행한 후에 할인을 적용한다
// 즉 { ...userACart, items: [...userACart.items] }와 같이 복사를 진행한 후 할인을 적용한다.

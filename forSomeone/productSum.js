/* 
장바구니에서 체크된 아이템의 총 가격과 수량 마일리지 정보 등을 알고 싶어하는 누군가가 있다.
cartItem의 항목을 ES6 문법을 이용해서 원하는 형태로 만들어 주자.

결과 값 - {
  totalPrice: 94000,
  totalQty: 3,
  totalMileage: 9400
}

Hint - ES6 filter(), map(), reduce()를 활용
*/

const cartItem = [
  {
    productName: "밸런스 젤",
    salePrice: 29000,
    mileage: 2900,
    quantity: 1,
    isCheck: true,
  },
  {
    productName: "클랜징 밤",
    salePrice: 15000,
    mileage: 1500,
    quantity: 3,
    isCheck: false,
  },
  {
    productName: "수분 팡팡 로션",
    salePrice: 18000,
    mileage: 1800,
    quantity: 2,
    isCheck: true,
  },
  {
    productName: "수분 팡팡 스킨",
    salePrice: 17000,
    mileage: 1700,
    quantity: 4,
    isCheck: true,
  },
];

function solution(cartItem) {
  const result = {
    totalPrice: 0,
    totalQty: 0,
    totalMileage: 0,
  };
  return cartItem.filter(n => n.isCheck).reduce((acc, cur) => {
      acc.totalPrice = acc.totalPrice + cur.salePrice * cur.quantity
      acc.totalQty = acc.totalQty + cur.quantity
      acc.totalMileage = acc.totalMileage + cur.mileage * cur.quantity
      return acc
  }, result);
}
console.log(solution(cartItem));

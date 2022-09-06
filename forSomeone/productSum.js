/* 
장바구니에서 체크된 아이템의 총 가격과 수량 마일리지 정보 등을 알고 싶어하는 누군가가 있다.
cartItem의 항목을 ES6 문법을 이용해서 원하는 형태로 만들어 주자.

결과 값 - {
  totalPrice: 94000,
  totalQty: 3,
  totalMileage: 9400
}

ES6 - map() 과 reduce()를 활용
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
];

function solution(cartItem) {
  const result = {};
  return result;
}
console.log(solution(cartItem))
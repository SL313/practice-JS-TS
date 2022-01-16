const a = [1, 2, 3, 4, 5];
const b = a.map((value) => {
  return value * 2;
});
console.log(b);

// map 은 변형을 해주는 함수

const c = a.map((value) => value * 2);
console.log(c);

// 한 줄로 축약

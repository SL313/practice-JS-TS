const a = [1, 2, 3, 4, 5];
const b = a.reduce((value, current) => {
  return value + current;
}, 0);
console.log(b);

// reduce 는 여러가지 값들을 하나의 결과물로 만들어주는 역할을 함
// current 에서는 값을 순서대로 읽어옴
// << , 0 >> 을 통해 초기값을 0으로 설정
// foreach 나 map 은 굉장히 많이 사용하지만 이에 비해 reduce 는 많이 쓰지는 않음 (그래도 세트)

const c = a.reduce((value, current) => value + current, 0);
console.log(c);

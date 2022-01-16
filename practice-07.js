const a = 10;
if (a > 0) {
  const a = 20;
  console.log(a);
}
console.log(a);
//black scope 와 shadowing

const arr = [];
arr.push("hello?");
console.log(arr);
// const는 한 번 상수임에도 push라는 메소드를 쓰면 데이터가 추가된다. why?
// >> 객체의 시작점(메모리의 주소)을 저장(고정)하는 것 배열을 저장한 거지 데이터의 주소를 저장한 게 아님.

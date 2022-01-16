const a = [1, 2, 3, 4, 5];
a.forEach((value) => {
  console.log(value);
});
// a에서 값을 하나씩 읽어다가 value에 넣어줌

a.forEach((value) => console.log(value));
// 반복문에서 처리하는 것을 iterator 함수로 변경

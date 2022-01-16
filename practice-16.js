if (undefined == null) {
  console.log("It arrived!");
}
// 실행 O
// nive 한 비교?

if (undefined === null) {
  console.log("It arrived!");
}
// 실행 X
//undefined 는 아예 정의 X, null은 공백을 넣어줬다? 그런 의미

if (123 == "123") {
  console.log("True");
}
// 문자열과 숫자 비교? '=='가 아니라 '==='로 비교하면 실행되지 않음
// === 를 통해 엄격하게 비교하는 것을 더 우선적으로 생각해야 함 (실수하기 쉽기 때문)

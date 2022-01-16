//const와 let의 차이점 >> const는 변수 선언 후 값 변경 불가 , let은 변수 선언 후 값 변경 가능
//const의 의미는 '상수' (constant의 약어; 메모리 주소를 변경하지 않도록 하는 방법), let의 의미는 '변수'

const variable1 = 10;
let variable2 = 20;

console.log(variable1);
console.log(variable2);

let a = 10;
console.log(a);
a = 30;
console.log(a);

const b = 10;
console.log(b);
b = 30;
console.log(b);

const a = [5, 4, 3, 2, 1];
for (const b in a) {
  console.log(b);
}
//출력값 0 1 2 3 4

for (const b of a) {
  console.log(b);
}
//출력값 5 4 3 2 1

/*
    - in과 of의 차이점

    for in 의 문법은 key와 object 부분으로 나뉘어 있음
    const b 라고 된 부분은 key, 뒤에 in a 라고 된 부분은 object
    object의 값이 끝나면 loop도 끝나기 때문에 안전한 방식

    for of 는 값에 대해 접근하는 반복문
*/

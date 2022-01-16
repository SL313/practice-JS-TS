const arr = [10, 20, 30, 40];

let value = 0;
for (const item of arr) {
  value += item;
}
console.log(value);
// for of 를 통해 모든 값의 합을 구하는 프로그램

const item2 = arr.reduce((value, current) => value + current, 0);
console.log(item2);
// for reduce 를 통해 모든 값의 합을 구하는 프로그램

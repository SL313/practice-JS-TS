const a = [1, 2, 3, 4, 5];
const items = a.values();
for (const item of items) {
  console.log(item);
}
// value 만 출력

const items2 = a.entries();
for (const item of items2) {
  console.log(item);
}
// key 랑 value 가 같이 옴 [key, value] 형식으로

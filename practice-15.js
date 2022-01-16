const a = { name: "hello", value: 123 };
console.log(Object.keys(a));
console.log(Object.values(a));
console.log(Object.entries(a));

Object.keys(a).forEach((key) => console.log(key));

// keys는 해당 object가 가진 key들을 불러와 array(iterator)로 반환
// values는 해당 object가 가진 value에 해당하는 것들을 불러와 array(iterator)로 반환
// entries는 object가 가진 key와 value를 array의 형태로 반환하는데, nested array 구조를 가지고 있기 때문에 사용에 유의해야 함.

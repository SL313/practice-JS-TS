const A = {};
const B = new Object();
console.log(A);
console.log(B);

const a = {
  hello: "world",
  world: "haha",
};
console.log(a);
console.log(a.hello);

a.test = 123;
console.log(a);

delete a.hello;
console.log(a);

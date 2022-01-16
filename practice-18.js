const a = null;
const b = a || 10;
console.log(b);
// a 와 10 을 비교할 때 a 가 null 이니까 || 조건에 의해 10을 check 하고 10을 출력

const A = 1;
const B = A || 10;
console.log(B);
// A 와 10 을 비교할 때, A 에 1 이 들어가 있으니까 || 조건으로 10을 보기 전에 1을 출력

// null check 이 필요할 경우 사용 가능

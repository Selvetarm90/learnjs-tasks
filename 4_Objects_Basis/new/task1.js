const arr = ['a','b','c'];

function A() {
 return arr;
}
function B() {
  return arr;
}

let a = new A();
let b = new B();

console.log(a == b);

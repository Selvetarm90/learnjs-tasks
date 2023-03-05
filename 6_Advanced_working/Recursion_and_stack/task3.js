function fib(n) {
  if (n < 3) return 1;
  while (n > 2) {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(7));
console.log(fib(5));

function fib2(n) {
  let x = 1;
  let y = 1;
  let z;
  for (let i = 3; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  return z;
}
console.log(fib2(7));
console.log(fib2(5));
console.log(fib2(77));

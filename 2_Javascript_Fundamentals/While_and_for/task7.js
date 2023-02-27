let n = 23;
let i = 2;

while (i <= n) {
  for (let j = 2; j <= i; j++) {
    if (i === 2) {
      console.log(2);
      break;
    } else if (i % j === 0) break;
    else if (i % j > 0 && j === i - 1) {
      console.log(i);
    }
  }
  i++;
}

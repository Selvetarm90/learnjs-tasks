let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  res = [];
  arr.forEach((el) => {
    if (el >= a && el <= b) {
      res.push(el)
    }
  });
  return res
}

console.log(filterRange(arr, 1 ,4));
console.log(arr);

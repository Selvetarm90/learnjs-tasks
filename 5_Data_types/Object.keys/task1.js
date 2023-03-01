function sumSalaries() {
  let res = 0;
  for (let value of Object.values(salaries)) {
    res += value;
  }
  return res;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

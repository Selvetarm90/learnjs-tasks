function sumInput() {
  let arr = [];
  let value;

  do {
    value = prompt('Введите число');
    if (!(value === null || value === '' || isNaN(value) )) {
      arr.push(value);
    }
  } while (!(value === null || value === '' || isNaN(value)));

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return 'Сумма чисел = ' + sum;
}

alert(sumInput());

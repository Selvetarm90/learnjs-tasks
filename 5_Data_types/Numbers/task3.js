function readNumber() {
  let value;
  while (!isFinite(value)) {
    value = prompt('Введите число');
    if (value === null || value === '') return null;
  }
  return value;
}

alert(readNumber());


function checkAge1(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return 'Родители разрешили?';
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return 'Родители разрешили?';
}
//Функции работают одинаково с else и без него
console.log(checkAge1(19));
console.log(checkAge1(17));
console.log(checkAge2(19));
console.log(checkAge2(17));

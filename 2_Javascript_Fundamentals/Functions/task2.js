// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return 'Родители разрешили?';
//   }
// }
function checkAge1(age) {
  return age > 18 ? true : 'Родители разрешили?'
}

function checkAge2(age) {
  return age > 18 || 'Родители разрешили?'
}
console.log(checkAge1(17));
console.log(checkAge1(19));
console.log(checkAge2(17));
console.log(checkAge2(19));


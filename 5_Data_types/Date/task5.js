function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log( getLastDayOfMonth(2023, 1) ); // 28
console.log( getLastDayOfMonth(2020, 8) ); // 30
console.log( getLastDayOfMonth(2022, 11) ); // 31

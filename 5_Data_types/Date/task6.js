function getSecondsToday() {
  let date = new Date();
  let startDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round((date - startDay) / 1000);
}
console.log(getSecondsToday());

function getSecondsToTomorrow() {
  let date = new Date();
  let nextDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1,
  );
  return Math.round((nextDay - date) / 1000);
}
console.log(getSecondsToTomorrow());

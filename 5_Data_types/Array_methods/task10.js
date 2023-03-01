function shuffle(array) {
  array.sort(() => Math.random() - .5);
}

let arr = [1, 2, 3, 4, 5];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

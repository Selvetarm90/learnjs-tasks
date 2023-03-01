function getAverageAge(users) {
  return Math.round(
    users.reduce((acc, obj) => {
      return (acc = acc + obj.age);
    }, 0) / 3,
  );
}

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 60 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // (25 + 60 + 29) / 3 = 38

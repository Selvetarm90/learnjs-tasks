let map = new Map();

map.set("name", "John");

//let keys = map.keys(); // здесь keys становится объектом, у него нет метода push
let keys = Array.from(map.keys());
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys);
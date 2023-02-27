let str = "Привет";
str.test = 5; // здесь создается специальный объект, который сразу удалится.
console.log(str.test); //undefined

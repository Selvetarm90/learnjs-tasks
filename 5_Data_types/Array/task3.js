let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // [a,b,function] в момент вызова функции this становится массив arr

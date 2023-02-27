function isEmpty(obj) {
  return  Object.keys(obj).length === 0 ? true : false;
}

console.log(isEmpty({}));
console.log(isEmpty({a: "b"}));

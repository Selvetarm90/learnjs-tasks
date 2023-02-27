function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();
console.log(user);
console.log(user.ref.name);  // undefined, т.к. в момент вызова makeUser() this для него является Global, у глобал нет свойства ref

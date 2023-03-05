let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printReverse(list) {
  if (list.next) {
    printReverse(list.next);
  }
  console.log(list.value);
}
printReverse(list);

function printReverse2(list) {
  let curentList = list;
  let arr = [];

  while (curentList) {
    arr.push(curentList.value);
    curentList = curentList.next;
  }
  return arr.reverse().forEach((i) => console.log(i));
}
printReverse2(list);

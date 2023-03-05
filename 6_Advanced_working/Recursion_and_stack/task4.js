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

function print(list) {
  console.log(list.value);
  if (list.next) {
    print(list.next);
  }
}

print(list);

function print2(list) {
  let curentList = list;
  while (curentList) {
    console.log(curentList.value);
    curentList = curentList.next;
  }
}
print2(list);

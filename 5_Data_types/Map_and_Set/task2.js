function aclean(arr) {
  let map = new Map();
  arr.forEach((str) => {
  let newStr =  str.split('').sort().join('').toLowerCase();
  map.set(newStr, str)
  });
  return Array.from(map.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); //"PAN,cheaters,era"

function sumTo1(n) {
    let sum = n;
    while (n > 1) {
        return sum + sumTo1(n - 1);
    }
    return sum
}
console.log(sumTo1(4));
console.log(sumTo1(3));

function sumTo2(n) {
    let sum = n;
    while (n > 1) {
        sum += n - 1;
        n--;
    }
    return sum
}
console.log(sumTo2(4));
console.log(sumTo2(3));

function sumTo2(n) {
    let sum = n;
    while (n > 1) {
        sum += n - 1;
        n--;
    }
    return sum
}
function sumTo3(n) {
    return (1 + n) / 2 * n
}

console.log(sumTo3(4));
console.log(sumTo3(3));
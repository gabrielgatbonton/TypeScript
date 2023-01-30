"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
;
console.log(add(1, 6));
console.log(add(1, 6, 3));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(1, 6));
console.log(sub(1, 6, 5));
const multi = function (num1, num2) {
    return num1 * num2;
};
console.log(multi(5, 6));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(1, 4, ...numbers));
console.log(add2(1, 4, ...[1, 2, 3, 4, 5]));
console.log(add2(1, 4, 1, 2, 3, 4, 5));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["A", "B", "C", "D", "E"]);

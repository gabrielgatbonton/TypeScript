"use strict";
let lname;
lname = "Gabriel";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Gabriel", "Gabriel1", "Gabriel2",];
let numList;
numList = [1, 2, 3, 4];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let emp = empList.find((emp) => emp === "Gabriel1");
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(emp);
console.log(sum);
;
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
console.log(swapNumbs);
let department;
department = '01';
department = 2;
//# sourceMappingURL=datatypes.js.map
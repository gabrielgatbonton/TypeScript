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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Blue;

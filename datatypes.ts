let lname : string;

lname = "Gabriel";

let newname = lname.toUpperCase();

console.log(newname);

let age : number;

age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid : boolean = false;

console.log(isValid);

let empList : string[];

empList = ["Gabriel","Gabriel","Gabriel",];

let numList : Array<number>;

numList = [1,2,3,4];

let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);

console.log(results);
console.log(num);
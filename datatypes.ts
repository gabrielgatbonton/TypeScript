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

empList = ["Gabriel","Gabriel1","Gabriel2",];

let numList : Array<number>;

numList = [1,2,3,4];

let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let emp = empList.find((emp) => emp === "Gabriel1");
let sum = numList.reduce((acc,num) => acc+num);

console.log(results);
console.log(num);
console.log(emp);
console.log(sum);

enum Color{
    Red,
    Green,
    Blue,
};

let c : Color = Color.Blue;

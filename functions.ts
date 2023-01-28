function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};

console.log(add(1, 6));

console.log(add(1, 6, 3));

const sub = (num1: number, num2: number, num3: number = 10): number => num1 - num2 - num3;

console.log(sub(1, 6));

console.log(sub(1, 6, 5));

const multi = function (num1: number, num2: number): number {
    return num1 * num2
};

console.log(multi(5, 6));

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1,2,3,4,5];
console.log(add2(1,4,...numbers));
console.log(add2(1,4,...[1,2,3,4,5]));
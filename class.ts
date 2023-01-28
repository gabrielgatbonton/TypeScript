import { Login, User } from "./interface";

interface Address {
    street: string;
    city: string;
    state: string;
    pin: number;
}

class Employee implements Login {
    // id!: number; id! = when you don't have a constructor
    // name!: string;
    // address!: string
    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login(): User {
        return { name: 'Gabriel', id: 0o123, email: '' };
    }
    #id: number;
    protected name: string;
    address: Address;

    get empId(): number {
        return this.#id;
    }
    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    getNameWithAddress(): string {
        //return this.name + " " + this.address; ->Basic return argument
        return `${this.name} ${this.address}`;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }
    getNameWithAddress(): string {
        return `${this.name} is a manager and stays at ${this.address}`;
    }
}

let gabriel = new Employee(1, "Gabriel", { street: "Lao Drive", city: "San Fernando", state: "Philippines", pin: 100 });
let alfonso = new Manager(2, "Alfonso", { street: "Lao Drive", city: "San Fernando", state: "Philippines", pin: 100 });
let info = gabriel.getNameWithAddress();
info = alfonso.getNameWithAddress();
gabriel.empId = 100;

console.log(gabriel.empId);
// gabriel.id = 1;
// gabriel.name = "Gabriel";
// gabriel.address = "Angeles City"


console.log(gabriel)
console.log(info);
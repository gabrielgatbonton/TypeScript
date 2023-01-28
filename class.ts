class Employee {
    // id!: number; id! = when you don't have a constructor
    // name!: string;
    // address!: string
    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    #id: number;
    protected name: string;
    address: string;

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
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
    getNameWithAddress(): string {
        return `${this.name} is a manager and stays at ${this.address}`;
    }
}

let gabriel = new Employee(1, "Gabriel", "Angeles City");
let alfonso = new Manager(2, "Alfonso", "San Fernado City");
let info = gabriel.getNameWithAddress();
info = alfonso.getNameWithAddress();
gabriel.empId = 100;

console.log(gabriel.empId);
// gabriel.id = 1;
// gabriel.name = "Gabriel";
// gabriel.address = "Angeles City"


console.log(gabriel)
console.log(info);
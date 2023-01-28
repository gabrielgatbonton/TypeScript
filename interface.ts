export interface User {
    name: string;
    age?: number;   //Made optional
    id: number;
    email: string;
}

let { name: userName, email: userLogin }: User = { name: 'Gabriel', id: 0o123, email: '' };


interface Employees extends User {
    salary: number;
}

let employee: Employees = {
    name: 'Gabriel',
    id: 0o124,
    email: '',
    salary: 1000,
}

export interface Login {
    login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
    { name: 'Gabriel', id: 1, email: '' },
    { name: 'Gabriel1', id: 2, email: '' },
    { name: 'Gabriel3', id: 3, email: '' },
    { name: 'Gabriel4', id: 4, email: '' },
    { name: 'Gabriel5', id: 5, email: '' },
]

console.log(user1);
console.log(user2)
console.log(restUsers)

let result = restUsers.filter(user => user.id > 4)
console.log(result)
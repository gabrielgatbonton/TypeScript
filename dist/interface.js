"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = { name: 'Gabriel', id: 0o123, email: '' };
let employee = {
    name: 'Gabriel',
    id: 0o124,
    email: '',
    salary: 1000,
};
let [user1, user2, ...restUsers] = [
    { name: 'Gabriel', id: 1, email: '' },
    { name: 'Gabriel1', id: 2, email: '' },
    { name: 'Gabriel3', id: 3, email: '' },
    { name: 'Gabriel4', id: 4, email: '' },
    { name: 'Gabriel5', id: 5, email: '' },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 4);
console.log(result);
//# sourceMappingURL=interface.js.map
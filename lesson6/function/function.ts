// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }

import {IUser} from "../interfaces/user.interface";

const user:IUser = {name: "Max", age: 18, gender: 'male'}

// function sum(a,b){
//     return a+b
// }

const sum = (a: number, b: number): number => {
    return a + b
}

// function showSum(a,b){
//     console.log(a + b);
// }

const showSum = (a: number, b: number): void => {
    console.log(a + b);
}
// function incAge(someUser, inc) {
//     someUser.age += inc
//     return someUser
// }

const incAge = (someUser:IUser, inc: number):IUser => {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2));
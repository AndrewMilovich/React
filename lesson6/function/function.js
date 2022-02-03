"use strict";
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
exports.__esModule = true;
var user = { name: "Max", age: 18, gender: 'male' };
// function sum(a,b){
//     return a+b
// }
var sum = function (a, b) {
    return a + b;
};
// function showSum(a,b){
//     console.log(a + b);
// }
var showSum = function (a, b) {
    console.log(a + b);
};
// function incAge(someUser, inc) {
//     someUser.age += inc
//     return someUser
// }
var incAge = function (IUser, inc) {
    IUser.age += inc;
    return IUser;
};
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));

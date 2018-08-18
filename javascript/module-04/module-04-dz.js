'use strict';
// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: 'html',
//     premium: true
// };
// user.mood = 'happy';
// user.hobby = 'javascript';
// delete user.premium;
// for (const key in user) {
//     console.log(`${key}:${user[key]}`);
// }
// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}:${user[key]}`);
// }
// const entries = Object.entries(user);
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}:${value}`);
// }

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
// };
// let max = 0;
// let maxName;
// for (let name in tasksCompleted) {
//   if (max < tasksCompleted[name]) {
//     max = tasksCompleted[name];
//     maxName = name;
//   }
// }
// console.log(maxName);


// const countProps = function(obj) {
//     const result = Object.keys(obj).length;
//     return result;
// }
// // Вызовы функции для проверки
// console.log(
//     countProps({})
// ); // 0
  
// console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// const isObjectEmpty = function(obj) {
//     if(Object.keys(obj).length === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false

// const countTotalSalary = function(salaries) {
//     let sum = 0;
//     for (const key in salaries) {
//         sum += salaries[key];
//     }
//     return sum;
// }
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  
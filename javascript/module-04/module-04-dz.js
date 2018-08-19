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

// const getAllPropValues = function (arr, prop) {
//     let newArr = [];
//     let nprop = prop;
//     for (let index = 0; index < arr.length; index++) {
//         for (const key in arr[index]) {
//             if(key === nprop){
//                 newArr.push(arr[index][key]);
//             }
//         }
//     }
//     return newArr;
// }
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []

// function User({name, isActive, age, friends}){
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;

//     this.getUserInfo = function(){
//         console.log(`User ${name} is ${age} years old and has ${friends} friends`);
//     };
// };
// const ivan = new User({name: "Ivan", isActive: true, age: 18, friends: 10});
// const max = new User({name: "Max",isActive: true,age: 10,friends: 5});
// const andrew = new User({name:"Andrew",isActive: false,age: 34,friends: 22});

// console.log(ivan.getUserInfo());
// console.log(max.getUserInfo());
// console.log(andrew.getUserInfo());

// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//     addManager(manager) {
//       this.managers.push(manager);
      
//       console.log(this.managers);
//     },
//     removeManager(manager) {
//       const idx = this.managers.indexOf(manager);
      
//       this.managers.splice(idx, 1);
      
//       console.log(this.managers);
//     },
//     getProducts() {
//       console.log(this.products);
      
//       return this.products;
//     }
//   }
//   store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
//   store.removeManager('mango'); // ['poly', ajax', 'chelsey']
//   store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// function Account({ login, password, type = "regular" }) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword = function(newPassword) {
//       this.password = newPassword;
  
//       console.log(this.password);
//     };
  
//     this.getAccountInfo = function() {
//       console.log(`
//         Login: ${login}, 
//         Pass: ${password}, 
//         Type: ${type}
//       `);
//     };
//   }
  
//   const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
//   });
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
//   console.log(account.changePassword("asdzxc")); // 'asdzxc'
//   console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
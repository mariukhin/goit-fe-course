'use strict';
// const users = [
//     {id: '001', name: 'Poly'},
//     {id: '002', name: 'Max'},
//     {id: '003', name: 'Chelsey'},

// ];

// const callback = (acc , user) => {
//     return{
//         ...acc,
//         [user.id]:user.name
//     };
// };
// const sideBarInfo = users.reduce(callback,{});
// console.log(sideBarInfo)

// const findGreaterThan = (num, arr) => {
//     const result = [];
//     this.num = num;

//     arr.filter(num => {
//         if(this.num < arr[num]){
//             result.push(arr[num]);
//         }
//     });
//     return result;
//   };
  
//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  
//   /* 
//     Функция multiplyBy принимает два аргумента - число и массив. 
//     Возвращает массив все значения которого умножены на число.
//   */
//   const multiplyBy = (num, arr) => {
//     let result = [];
//     this.num = num;

//     result = arr.map(number => this.num*arr[number-1]);
//     return result;
//   };
  
//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  
//   /* 
//     Функция summAllNumbers принимает любое число аргументов.
//     Возвращает число - сумму всех аргументов.
//   */
//   function summAllNumbers(...args) {
//     const result = Array.from(args).reduce((acc, value) => acc + value, 0);
//     return result;
//   }
  
//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
//   /* 
//     Функция findEvery получает два аргумента - число и массив.
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */
//   const findEvery = (num, arr) => {
//     this.num = num;
//     const result = arr.every(number =>number>= this.num);
//     return result;
//   };
  
//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true


// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

// const getPropValues = (arr, prop) => {
//     this.prop = prop;
//     const result = arr.map(item => item[prop]);
//     return result;
// };
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]

// const users = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];

// const setGuestState = (users, period) => {
//     this.period = period;
//     const result = users.map(item => ({
//         ...item,
//         isActive: item.inactiveDays < period
//     }));
//     return result;
// };
  
// // Вызовы функции для проверки
// console.log(
//     setGuestState(users, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
// console.log(
//     setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
// console.log(
//     setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
// const getActiveGuests = (guests) => guests.filter(item => item.isActive);
// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
// const getGuestsOlderThan = (guests, age) => guests.filter(item => item.age > age);
// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
// console.log(getGuestsOlderThan(guests, 55)); // []

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
// ];
// const getGuestById = (guests, id) => guests.find(item => item.id === id);
// // Вызовы функции для проверки
// console.log(
//     getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}
  
// console.log(
//     getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}
  
// console.log(
//     getGuestById(guests, 5)
// ); // undefined

// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
// };
// const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);
// console.log(sum(Object.values(order))); // 150

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
};
  
const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
};
  
const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
};

const getTotalPrice = (products, order) =>{
    const arrProd = Object.keys(products);
    const arrOrder = Object.keys(order);
    let sum = 0;
    const newArr = arrProd.reduce((acc,num) => {
        if(arrOrder.includes(num)){
            sum = products[num]*order[num];
            acc += sum;
            
        }
        return acc;
    },0);
    return newArr;
};
  // Вызовы функции для проверки
console.log(getTotalPrice(products, orderA)); // 140
console.log(getTotalPrice(products, orderB)); // 130


// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
//   ];
  
//   const guestsB = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: true },
//     { name: "Ajax", isActive: true }
//   ];
  
//   const allGuestsActive = (guests) => guests.every(item => item.isActive);
//   // Вызовы функции для проверки
//   console.log(allGuestsActive(guestsA)); // false
//   console.log(allGuestsActive(guestsB)); // true
  
  
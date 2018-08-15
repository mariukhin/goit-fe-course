'use strict';

// const checkNumberType = function(num) {
//     if(num % 2 === 0){
//         const even = "Even";
//         return even;
//     }else{
//         const odd = "Odd";
//         return odd;
//     }
// }
// console.log(checkNumberType(5));

// const formatString = function (str) {
//     const arr = Array.from(str);
//     if (arr.length < 40) {
//         return str;
//     } else {
//         arr.length = 40;
//         arr.push('...');
//         const result = arr.join('');
//         return result;
//     }
// }
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка
  
// console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка
  
// console.log(
//     formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка
  
// console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка


// const checkForSpam = function (str) {
//     const newStr = str.toLowerCase();
//     if (newStr.indexOf('spam') +1 || newStr.indexOf('sale') + 1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log( checkForSpam('Latest technology news') ); // false
// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
// console.log( checkForSpam('Get best sale offers now!') ); // true
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// const getPx = function(str) {
//     if(typeof(str) !== "string"){
//         return null;
//     }else{
//         if(str.indexOf('.')){
//             const floatRes = Number.parseFloat(str);
//             return floatRes;
//         }else{
//             const numRes = Number.parseInt(str);
//             return numRes;
//         }
//     }
// }
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null



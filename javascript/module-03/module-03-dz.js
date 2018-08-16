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

// const findLongestWord = function (str) {
//     let strSplit = str.split(' ');
//     let longestWord;
//     let lgth = 0;

//     for(let i = 0; i < strSplit.length; i++){
//         if(strSplit[i].length > lgth){
//             lgth = strSplit[i].length;
//             longestWord = strSplit[i];
//         }
//     } 
//     return longestWord;
// }
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'

// const findLargestNumber = function(numbers) {
//     let longestNum;
//     let lgth = 0;

//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] > lgth){
//             lgth = numbers[i];
//             longestNum = numbers[i];
//         }
//     } 
//     return longestNum;
// }
// console.log(findLargestNumber([1,2,3]));
// console.log(findLargestNumber([27,12,18,5]));
// console.log(findLargestNumber([31,128,14,74]));


// const uniqueNumbers = [2,1,4,9];
// const addUniqueNumbers = function (...args) {
//     const newArr = Array.from(args);
//     nextInput:
//         for (let i = 0; i < newArr.length; i++) {
//             let numb = newArr[i];
//             for (let j = 0; j < uniqueNumbers.length; j++) {
//                 if(numb === uniqueNumbers[j]) continue nextInput;
            
//             }
//             uniqueNumbers.push(numb);
//         }
// }
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]





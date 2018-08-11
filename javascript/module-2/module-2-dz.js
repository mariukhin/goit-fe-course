// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// console.log(users.length);
// console.log(users[1]);
// console.log(users[3]);
// console.log(users[0]);
// console.log(users[2]);

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// console.log(users.splice(0,1));
// console.log(users);
// console.log(users.splice(3,1));
// console.log(users);
// console.log(users.splice(0, 0, 'Maksim'));
// console.log(users);

// let string = prompt('Введите произвольную строку: ', '');
// let arr;
// let number = 0;
// arr = string.split('');
// console.log(arr);
// console.log(arr.length);
// for (let index = 0; index < arr.length; index++) {
//     console.log(`Значение ${arr[index]}, позиция ${number}`);
//     number++;
// }

// let choose = 0;
// do {
//     choose = Number(prompt('Введите число больше 100', ''));
//     if(!Number(choose)){
//         prompt('Введите число больше 100, а не другое!');
//         continue;
//     }
// } while (choose <= 100);

// const min = 1;
// const max = 100;
// for (let index = 0; index <= max; index++) {
//     if(index % 5 === 0 && index % 3 !== 0){
//         console.log("Buzz");
//         continue;
//     }else if(index % 3 === 0){
//         console.log("Fizz");
//     }else{
//         console.log(index);
//     } 
// }

// const numbers = [1,3,17,5,9,14,8,14,34,18,26];
// const num = 10;
// const newArr = [];
// for (const index of numbers) {
//     if(index >= num){
//         console.log(index);
//         newArr.push(index);
//     }
// }
// console.log(newArr);

// const string = "May the force be with you";
// let longestWord;
// console.log(longestWord);

// let result;
// let arr = [];
// do {
//     result = Number(prompt('Введите число: ', ''));
//     if(!Number(result)||result === null){
//         break;
//     }
//     arr.push(result);
// } while(Number(result));
// console.log(arr);
// let sum = 0;
// for (let iterator in arr) {
//     sum += arr[iterator];
// }
// console.log(sum);

// const numbers = [11, 12, 35, 42, 58, 64, 74, 86, 92, 100];
// let min = numbers[0];
// let max = numbers[9];
// let choose = Number(prompt(`Введите число между ${min} и ${max}: `, ''));
// if(!Number(choose)){
//     alert("Это не число!");
// }else if(choose === null){
//     alert("Спасибо, до встречи");
// }else{
//     for (let key in numbers) {
//         if(numbers.includes(choose)){
//             alert("Поздравляем, вы угадали!");
//             break;
//         }else{
//             alert("Сожалеем, вы не угадали");
//             break;
//         }
//     }
// }
let userInput;
let userNumber;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Введите число: ', '');
    if(isNaN(userInput)){
        alert('Это не число, повторите ввод');
        break;
    }else{
        userNumber = Number(userInput);
        numbers.push(userNumber);
    }
} while (userInput !== null);

console.log(numbers);

for (let iterator in numbers) {
    total += numbers[iterator];
}
console.log(total);

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4ssw0rd'];
// let attempts = 3;
// let userInput;
// do {
//     userInput = prompt('Введите пароль','');
//     attempts -= 1;
//     if(passwords.includes(userInput)){
//         alert('Добро пожаловать!');
//         break;
//     }else if(attempts === 0){
//         alert('У вас закончились попытки, аккаунт заблокирован!');
//         break;
//     }else{
//         alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
//         continue;
//     }
// } while (userInput !== null && attempts !== 0);
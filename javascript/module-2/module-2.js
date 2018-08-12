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
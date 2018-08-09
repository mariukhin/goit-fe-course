'user strict';


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const cancelText = 'Отменено пользователем!';
const nosuccessText = 'Доступ запрещен!';
const successText = 'Добро пожаловать!';

let userLogin = prompt('Введите логин: ', '');
let userPassword;

if(userLogin === adminLogin){
    userPassword = prompt('Введите пароль: ', '');
    if(userPassword === adminPassword){
        alert(successText);
    }else if(userPassword === null){
        alert(cancelText);    
    }else if(userPassword !== adminPassword){
        alert(nosuccessText); 
    }      
}else if(userLogin === null){
    alert(cancelText);
}else if(userLogin !== adminLogin){
    alert(nosuccessText);
}


////////////---------------Дополнительное задание--------------/////////
// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// const noAnswer = 'Нам очень жаль приходите еще!';

// let answer;
// let placeCount = Number(prompt('Введите число необходимых мест: ', ''));

// if(placeCount>0 && Number.isInteger(placeCount)){
//     if(placeCount <= taba){
//         answer = confirm('Есть место в группе taba, останетесь в этой группе?');
//         if(answer){
//             alert('Приятного путешествия в группе taba');
//         }else if(!answer){
//             alert(noAnswer);
//         }
//     }else if(placeCount <= sharm){
//         answer = confirm('Есть место в группе sharm, останетесь в этой группе?');
//         if(answer){
//             alert('Приятного путешествия в группе sharm');
//         }else if(!answer){
//             alert(noAnswer);
//         }
//     }else if(placeCount <= hurgada){
//         answer = confirm('Есть место в группе hurgada, останетесь в этой группе?');
//         if(answer){
//             alert('Приятного путешествия в группе hurgada');
//         }else if(!answer){
//             alert(noAnswer);
//         }
//     }else{
//         alert('Нет группы с таким количеством мест');
//     }
// }else{
//     alert('Ошибка ввода');
// }
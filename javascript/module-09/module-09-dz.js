'use strict';

// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
// const btnStart = document.querySelector('.js-start');
// const btnStop = document.querySelector('.js-stop');
// let timerId = null;
// btnStart.addEventListener('click', () =>{
//     timerId = setInterval(() => {
//         let color = colors[Math.floor(Math.random()*colors.length)];
//         const body = document.body;
//         body.style.backgroundColor = color;
//     }, 1000)
// });
// btnStop.addEventListener('click', () => {
//     clearInterval(timerId);
// });

// function getFormattedTime(time) {
//     let date = new Date();
//     date.setTime(time);
//     let minutes = addFirstZero(date.getMinutes());
//     let seconds = addFirstZero(date.getSeconds());
//     let millisec = String(date.getMilliseconds()).split('');
//     return `${minutes}:${seconds}.${millisec[0]}`;
// }
// const addFirstZero = (number) => {
//     if(number < 10 && number >= 0){
//         number = String('0'+ number);
//         return number;
//     }else{
//         return number;
//     }
// }
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   pauseTime: 0,
//   id: null
// };


// const startTimer = ({target}) => {
//     setActiveBtn(target);
//     timer.startTime = Date.now();
//     timer.id = setInterval(() => {
//         const currentTime = Date.now();
//         timer.deltaTime = currentTime - (timer.startTime+timer.pauseTime);
//         updateClockface(clockface, timer.deltaTime);
//     },100);
// }
// startBtn.addEventListener('click', startTimer);

// const stopTimer = ({target}) => {
//     setActiveBtn(target);
//     clearInterval(timer.id);
//     // timer.pauseTime = Date.now();
//     updateClockface(clockface, timer.deltaTime);
// }
// stopBtn.addEventListener('click', stopTimer);


// function updateClockface(elem, time) {
//   elem.textContent = getFormattedTime(time);
// }
// function getFormattedTime(time) {
//     let date = new Date();
//     date.setTime(time);
//     let minutes = addFirstZero(date.getMinutes());
//     let seconds = addFirstZero(date.getSeconds());
//     let millisec = Number.parseInt(date.getMilliseconds()/100);
//     return `${minutes}:${seconds}.${millisec}`;
// }
// const addFirstZero = (number) => {
//     if(number < 10 && number >= 0){
//         number = String('0'+ number);
//         return number;
//     }
//     return number;
// }

// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
//   target.classList.add('active');
// }

const DELAY = 1000;

let goodsAmount = 100;

const processOrder = (amount) => {
    return new Promise((onResolve) => {
        setTimeout(() => {
            if(typeof amount !== 'number'){
                throw new Error("Некорректный ввод!");
            } else if(amount <= goodsAmount){
                onResolve('Ваш заказ готов!');
            }else{
                onResolve('К сожалению на складе недостаточно товаров!');
            }
        }, DELAY/2);
    })
}; 
// Вызовы функции для проверки
processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(500)
  .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

processOrder("qwe")
  .then(x => console.log(x))
  .catch(err => console.log(err)); // Некоректный ввод!
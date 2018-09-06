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

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};


const startTimer = ({target}) => {
    setActiveBtn(target);
    timer.id = setInterval(() => {
        if(timer.deltaTime === null){
            let date = new Date();
            updateClockface(clockface, date.getTime());
        }else{
            updateClockface(clockface, timer.deltaTime);
        }
    },100);
}
startBtn.addEventListener('click', startTimer);

const stopTimer = ({target}) => {
    setActiveBtn(target);
    timer.deltaTime = clockface.textContent;
    clearInterval(timer.id);
}
stopBtn.addEventListener('click', stopTimer);
/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  if(typeof time === 'number'){
    elem.textContent = getFormattedTime(time);
  }else{
    elem.textContent = time;
  }
}
function getFormattedTime(time) {
    let date = new Date();
    date.setTime(time);
    let minutes = addFirstZero(date.getMinutes());
    let seconds = addFirstZero(date.getSeconds());
    let millisec = String(date.getMilliseconds()).split('');
    return `${minutes}:${seconds}.${millisec[0]}`;
}
const addFirstZero = (number) => {
    if(number < 10 && number >= 0){
        number = String('0'+ number);
        return number;
    }
    return number;
}
/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
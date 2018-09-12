'use strict';

const time = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector(".js-reset");

let timer = {
  isActive: false,
  paused: false,
  startTime: null,
  currentTime: null,
  deltaTime: null,
  pauseTime: 0,
  delay: 0,
  laps: [],
  id: null
};


const startTimer = () => {
    if(!timer.isActive){
      setActiveBtn(startBtn);
      timer.isActive = true;
      timer.startTime = Date.now();
      timer.id = setInterval(updateTime, 100);
      setStartBtnMode('pause');
      return;
    }else if(timer.isActive && !timer.paused){
      timer.paused = true;
      timer.pauseTime = Date.now();
      clearInterval(timer.id);
      setStartBtnMode('continue');
      return;
    }else if(timer.isActive && timer.paused){
      timer.paused = false;
      let currentDelayTime = Date.now();
      timer.delay += currentDelayTime - timer.pauseTime;
      timer.id = setInterval(updateTime, 100);
      setStartBtnMode('pause');
      return;
    }
};
startBtn.addEventListener('click', startTimer);

const getLap = ({target}) => {
    setActiveBtn(target);
    const lapsGet = document.querySelector('.js-laps');
    const item = document.createElement('li');
    item.classList.add('lap-item');
    updateClockface(item, timer.deltaTime);
    timer.laps.push(item);
    lapsGet.appendChild(item);
};
lapBtn.addEventListener('click', getLap);


const resetTimer = ({target}) => {
    setActiveBtn(target);
    clearResetBtn();
    setStartBtnMode('start');
}
resetBtn.addEventListener('click', resetTimer);

function clearResetBtn() {
    timer.isActive = false;
    timer.paused = false;
    timer.startTime = null;
    timer.deltaTime = null;
    timer.delay = 0;
    clearInterval(timer.id);
    updateClockface(time, 0);
    resetLapArr();
    const lapArr = timer.laps;
    lapArr.splice(0, lapArr.length);
}

function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}
function getFormattedTime(time) {
    let date = new Date();
    date.setTime(time);
    let minutes = addFirstZero(date.getMinutes());
    let seconds = addFirstZero(date.getSeconds());
    let millisec = Number.parseInt(date.getMilliseconds()/100);
    return `${minutes}:${seconds}.${millisec}`;
}
const addFirstZero = (number) => {
    if(number < 10 && number >= 0){
        number = String('0'+ number);
        return number;
    }
    return number;
}


const removeActive = (elem) => elem.classList.remove('active');
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }else{
    removeActive(startBtn);
    removeActive(lapBtn);
    removeActive(resetBtn);
    target.classList.add('active');
  }
};

function resetLapArr() {
    const lapArr = timer.laps;
    lapArr.splice(0, lapArr.length);
    const lapsGet = document.querySelector('.js-laps');
    const items = document.querySelectorAll('.lap-item');
    items.forEach(lap => lapsGet.removeChild(lap));
};
function updateTime() {
  timer.currentTime = Date.now() - timer.delay;
  timer.deltaTime = timer.currentTime - timer.startTime;
  updateClockface(time, timer.deltaTime);
}

function setStartBtnMode(mode) {
  switch(mode){
    case 'pause': 
      startBtn.textContent = 'Pause';
      startBtn.classList.remove('btn--continue');
      startBtn.classList.add('btn--pause');
      break;
    case 'continue':
      startBtn.textContent = 'Continue';
      startBtn.classList.remove('btn--pause');
      startBtn.classList.add('btn--continue');
      break;
    case 'start':
      startBtn.textContent = 'Start';
      startBtn.classList.remove('btn--pause');
      startBtn.classList.remove('btn--continue');
  }
}


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

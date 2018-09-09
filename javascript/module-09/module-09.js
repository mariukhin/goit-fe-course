'use strict';

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const time = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector(".js-reset");

const timer = {
  isActive: null,
  startTime: null,
  deltaTime: null,
  pauseTime: 0,
  laps: [],
  id: null
};


const startTimer = ({target}) => {
    setActiveBtn(target);
    timer.startTime = Date.now();
    timer.isActive = true;
    timer.id = setInterval(() => {
        const currentTime = Date.now();
        timer.deltaTime = currentTime - timer.startTime;
        updateClockface(time, timer.deltaTime);
    },100);
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
    clearInterval(timer.id);
    time.textContent = '00:00.0';
    resetLapArr();
    const lapArr = timer.laps;
    lapArr.splice(0, lapArr.length);
}
resetBtn.addEventListener('click', resetTimer);


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
  }
  removeActive(startBtn);
  removeActive(lapBtn);
  removeActive(resetBtn);
  target.classList.add('active');
};
function resetLapArr() {
    const lapArr = timer.laps;
    lapArr.splice(0, lapArr.length);

    const lapsGet = document.querySelector('.js-laps');
    const items = document.querySelectorAll('.lap-item');
    items.forEach(lap => lapsGet.removeChild(lap));
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

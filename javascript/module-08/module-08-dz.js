'use strict';

// const btn = document.querySelector('.button');
// const addclick = () => {
//     let num = Number(btn.textContent);
//     btn.textContent = String(num+1);
// };
// btn.addEventListener('click', addclick);

// const parent = document.querySelector('div');
// const btnAdd = document.querySelector('button');

// const makeSum = () => {
//     const firstNum = parent.children[1].value;
//     const secondNum = parent.children[3].value;
//     const viewRes = document.querySelector('.result');
//     const result = Number(firstNum) + Number(secondNum);
//     viewRes.textContent = String(result);
// };
// btnAdd.addEventListener('click', makeSum);

// const btnSub = document.querySelector('.js-sub');
// const btnAdd = document.querySelector('.js-add');

// const subVal = () => {
//     const val = document.querySelector('.js-value');
//     let num = Number(val.textContent);
//     if(num === 0){
//         val.textContent = String(0);
//     }else{
//         num--;
//         val.textContent = String(num);
//     }
// };
// const addVal = () => {
//     const val = document.querySelector('.js-value');
//     let num = Number(val.textContent);
//     num = num+1;
//     val.textContent = String(num);
// };
// btnSub.addEventListener('click', subVal);
// btnAdd.addEventListener('click', addVal);

// const form = document.querySelector('.question-form');
// const btnSend = document.querySelector('.btn');
// const seeResult = (event) => {
//     event.preventDefault();
//     const inputs = Array.from(document.querySelectorAll('input'));
//     const findChecked = () => inputs.find(item => item.checked);

//     const result = document.querySelector('.result');
//     result.textContent = `Result: ${findChecked().value}`;
// };
// btnSend.addEventListener('click', seeResult);

// const images = Array.from(document.querySelectorAll('img'));
// images.forEach(item => item.addEventListener('click', () => {
//     console.log(item.getAttribute('src'));
// }));

const btnDel = Array.from(document.querySelectorAll('button'));
btnDel.forEach(item => item.addEventListener('click', () => item.parentNode.remove()));

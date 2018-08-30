'use strict';

// const items = document.querySelectorAll(".categories > li");
// items.forEach(item => {
//     console.log('Категория: ', item.firstChild);
//     console.log('Количество вложенных li: ', item.firstElementChild.children.length);
// });
// const firstItem = list.children[0];
// const secondItem = list.children[1];
// const thirdItem = list.children[2];
// console.log('Категория: ', firstItem.textContent);
// console.log('Категория: ', secondItem.textContent);
// console.log('Категория: ', thirdItem.textContent);

// const body = document.body;
// const list = body.firstElementChild;
// const firstChild = list.children[0];
// const lastChild = list.children[4];
// firstChild.style.color = '#FF0000';
// lastChild.style.color = '#0000FF';

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const list = document.querySelector('.list');
// const firstItem = document.createElement('li');
// const secondItem = document.createElement('li');
// const thirdItem = document.createElement('li');
// const fourthItem = document.createElement('li');
// const fifthItem = document.createElement('li');
// firstItem.textContent = elements[0];
// secondItem.textContent = elements[1];
// thirdItem.textContent = elements[2];
// fourthItem.textContent = elements[3];
// fifthItem.textContent = elements[4];
// list.appendChild(firstItem);
// list.appendChild(secondItem);
// list.appendChild(thirdItem);
// list.appendChild(fourthItem);
// list.appendChild(fifthItem);

// const body = document.body;
// const list = document.createElement('ul');
// do {
//     let info = prompt('Введите содержимое пункта: ','');
//     if(info === null){
//         break;
//     }
//     let item = document.createElement('li');
//     item.textContent = info;
//     list.appendChild(item);

// } while (true);
// body.appendChild(list);
// console.log(list);

// const inputs = Array.from(document.querySelectorAll('input'));
// const res = (arr) => arr.filter(item => item.hasAttribute('checked'));
// const getInputsData = function(inputs) {
//     const resultArr = [];
//     inputs.forEach(item => resultArr.push(item.getAttribute('value')));
//     return resultArr;
// }
// console.log(getInputsData(res(inputs)));

// const createPostCard = function() {
//     const body = document.body;
//     const block = document.createElement('div');
//     block.classList.add('post');

//     const blockimg = document.createElement('img');
//     blockimg.classList.add('post__image');
//     blockimg.setAttribute('src', 'http://via.placeholder.com/400x150');
//     blockimg.setAttribute('alt', 'post image');

//     const title = document.createElement('h2');
//     title.classList.add('post__title');
//     title.textContent = 'Lorem ipsum dolor';

//     const subtitle = document.createElement('p');
//     subtitle.classList.add('post__text');
//     subtitle.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores
//     maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem`;

//     const button = document.createElement('a');
//     button.classList.add('button');
//     button.textContent = 'Read more';
//     button.setAttribute('href', '#');

//     block.append(blockimg, title, subtitle, button);
//     body.insertBefore(block, null);
// }
// createPostCard();
const root = document.querySelector('#root');
const createBoxes = (num) => {
    const container = document.createElement('div');
    container.classList.add('container');

    let width = '30px';
    let height = '30px';
    let newidth = 0;
    let neheight = 0;

    for (let i = 1; i <= num; i++) {
        const box = document.createElement('div');
        box.classList.add(`box-${i}`);
        box.style.backgroundColor = generateColor();
        box.style.width = width;
        box.style.height = height;

        container.appendChild(box);
        newidth = String((Number.parseInt(width)+10)+ 'px');

        neheight = String((Number.parseInt(height)+10)+ 'px');
        
        width = newidth;
        height = neheight;
    }
    return container;
};
const generateColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
let number = Number(prompt('Количество блоков: ', ''));
root.appendChild(createBoxes(number));


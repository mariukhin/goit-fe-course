import './style.css';
import './sass/test.scss';
// import postTpl from './templates/post.hbs';
// import 'normalize.css';

var axios = require('axios');
var postTpl = require("./templates/post.hbs");

const form = document.querySelector(".js-form");
const btnAdd = document.querySelector(".js-add");
const input = document.querySelector(".js-input");
const container = document.querySelector(".container");

const addedUrl = [];
const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const key = '5bce06a0411b5b82c662168a672cb8f9b7695bb1e3842';
btnAdd.addEventListener("click", onAdd);

function onAdd(evt) {
    evt.preventDefault();
    const url = input.value;
    checkCard(url);
    console.log(addedUrl);
    showItems(addedUrl);
    // if (addedUrl.length !== 0) {
    //   showItems(addedUrl);
    // } else {
    //   alert('Not found');
    // }
}
function checkCard(url) {
    if(isValid(pattern, url)){
      checkPresence(url);
    }else{
      alert("Your card isn`t valid!");
    }
}
function checkPresence(url) {
  if(addedUrl.includes(url)){
    alert("This card is alredy been added!");
  }else{
    getCard(url);
  }
}
function isValid(pattern, val) {
  return pattern.test(val);
}
function getCard(url) {
  // const apiUrl = `https://api.linkpreview.net?key=${key}&q=${url}` ;
  // return fetch(apiUrl)
  //   .then(response => {
  //     if(response.ok){
  //       return response.json();
  //     }
  //     throw new Error('Error' + response.statusText);
  //   })
  //   .then(data =>{
  //     addedUrl.push({ 
  //         title: data.title,
  //         descr: data.description,
  //         url: data.url,
  //         img: data.image
  //     })
  //   })
  //   .catch(err => console.log(err));
  return axios
      .get(`https://api.linkpreview.net?key=${key}&q=${url}`)
      .then(response => {
        addedUrl.push({ 
          title: response.data.title,
          descr: response.data.description,
          url: response.data.url,
          img: response.data.image
        })
        // console.log(response.data.title);
        // console.log(response.data.description);
        // console.log(response.data.url);
        // console.log(response.data.image);
      })
      .catch(error => console.log(error));
}
function showItems(items) {
    const markup = items.reduce((acc , item) => acc + postTpl(item), '');
    container.innerHTML = markup;
}
/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
      на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
      диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
      регулярные выражения для валидации url.
          
    - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
      для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/
import './style.css';
import './sass/test.scss';

var axios = require('axios');
var postTpl = require("./templates/post.hbs");

const form = document.querySelector(".js-form");
const btnClear = document.querySelector(".js-clear");
const input = document.querySelector(".js-input");
const container = document.querySelector(".container");

let addedUrl = [];
const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const key = '5bce06a0411b5b82c662168a672cb8f9b7695bb1e3842';
form.addEventListener("submit", onAdd);
btnClear.addEventListener("click", onClear);

window.onload = function() {
  if(localStorage.length >= 1){
    addedUrl = getLocalStorage('urlArr');
    showItems(addedUrl);
    addDeleteButton();
  }
}
function onAdd(evt) {
    evt.preventDefault();
    const url = input.value;
    checkCard(url);
}
function onDelete(evt) {
    evt.preventDefault();
    const target = evt.target;
    const targetParent = target.parentNode;
    const targetUrl = targetParent.firstElementChild.textContent;
    deleteItem(targetUrl);
    setLocalStorage('urlArr', addedUrl.filter(item => item.url != targetUrl));
    showItems(addedUrl);
}
function onClear(evt) {
    evt.preventDefault();
    localStorage.clear();
    addedUrl = [];
    container.innerHTML = '';
}
function checkCard(url) {
    if(isValid(pattern, url)){
      checkPresence(url);
    }else{
      alert("Your card isn`t valid!");
    }
}
function checkPresence(url) {
  if(checkArr(url)){
    alert("This card is alredy been added!");
  }else{
    getCard(url);
  }
}
function isValid(pattern, val) {
  return pattern.test(val);
}
function checkArr(url) {
  return addedUrl.find(item => item.url === url);
}
function getCard(url) {
  return axios
      .get(`https://api.linkpreview.net?key=${key}&q=${url}`)
      .then(response => {
        const item = { 
            title: response.data.title,
            descr: response.data.description,
            url: response.data.url,
            img: response.data.image
        };
        addedUrl.unshift(item);
        setLocalStorage('urlArr', addedUrl);
        showItems(addedUrl);
        addDeleteButton();
      })
      .catch(error =>alert(`Повторите попытку! ${error}`));
}
function showItems(items) {
    if(items.length>0){
      const markup = items.reduce((acc , item) => acc + postTpl(item), '');
      container.innerHTML = markup;
    }else{
      container.innerHTML = '';
    }
}
function deleteItem(target) {
  return addedUrl = (addedUrl.length>0) ? addedUrl.filter(item => item.url != target) : [];
}
function addDeleteButton() {
  const btnDel = Array.from(document.querySelectorAll(".js-delete"));
  return btnDel.forEach(item => item.addEventListener("click", onDelete));
}
function setLocalStorage(key, value) {
  try {
    const serState = JSON.stringify(value);
    localStorage.setItem(key, serState);
  } catch (error) {
    console.error("Set state error: ", error);
  }
}
function getLocalStorage(key) {
  try {
    const serState = localStorage.getItem(key);
    return serState === null
      ? undefined
      : JSON.parse(serState);
  } catch (error) {
    console.error("Get state error: ", error)
  }
}
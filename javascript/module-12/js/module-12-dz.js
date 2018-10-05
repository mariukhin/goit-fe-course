'use strict';

// const listItems = [
//     { name: 'item 1', count: 2 },
//     { name: 'item 2', count: 4 },
//     { name: 'item 3', count: 12 },
//     { name: 'item 4', count: 29 },
// ];
// const container = document.querySelector('.list');
// const source = document.querySelector('#source').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = listItems.reduce((acc , item) => acc + template(item), '');
// container.innerHTML = markup;

// const posts = [
//     { title: "post 1", text: "text 1", isFav: true },
//     { title: "post 2", text: "text 2", isFav: false },
//     { title: "post 3", text: "text 3", isFav: true },
//     { title: "post 4", text: "text 4", isFav: false }
// ];
// const container = document.querySelector('.container');
// const source = document.querySelector('#source').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = posts.reduce((acc , item) => acc + template(item), '');
// container.innerHTML = markup;


const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();
  const fname = firstname.value;
  const lname = lastname.value;
  const pattern = /^[a-zA-Z- ]{2,}$/;
  const res = {
    'first name' : isValid(pattern, fname),
    'last name' : isValid(pattern, lname),
  };
  console.log(res);
}
function isValid(pattern, val){
  return pattern.test(val);
}


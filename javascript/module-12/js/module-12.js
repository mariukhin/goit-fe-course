'use strict';

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },

  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const listFilter = {
    size: [], 
    color: [], 
    release_date: []
};
let results = [];

const btnFilter = document.querySelector(".js-filter");
const btnClear = document.querySelector(".js-clear");

const form = document.querySelector(".js-form");

const firstSize = document.querySelector(".js-size13");
const secSize = document.querySelector(".js-size15");
const thirdSize = document.querySelector(".js-size17");

const firstColor = document.querySelector(".js-colorWhite");
const secColor = document.querySelector(".js-colorGray");
const thirdColor = document.querySelector(".js-colorBlack");

const firstRelDate = document.querySelector(".js-rel2015");
const secRelDate = document.querySelector(".js-rel2016");
const thirdRelDate = document.querySelector(".js-rel2017");

const container = document.querySelector('.container');
const source = document.querySelector('#source').innerHTML.trim();
const template = Handlebars.compile(source);

form.addEventListener("submit", filter);
btnClear.addEventListener("click", clear);

function filter(evt) {
    evt.preventDefault();
    addToFilter(listFilter.size, firstSize, secSize, thirdSize);
    addToFilter(listFilter.color, firstColor, secColor, thirdColor);
    addToFilter(listFilter.release_date, firstRelDate, secRelDate, thirdRelDate);

    laptops.filter(item => {
      const inclSize = listFilter.size.includes(item.size);
      const inclColor = listFilter.color.includes(item.color);
      const inclRelDate = listFilter.release_date.includes(item.release_date);
      if(inclSize && inclColor && inclRelDate){
        results.push(item);
        return;
      } 
      if(inclSize && inclColor){
        results.push(item);
        return;
      }
      if(inclSize && inclRelDate){
        results.push(item);
        return;
      }
      if(inclColor && inclRelDate){
        results.push(item);
        return;
      }
    })
    const markup = results.reduce((acc , item) => acc + template(item), '');
    container.innerHTML = markup;
}
function clear() {
    container.innerHTML = '';
}

function addToFilter(section, ...args){
    args.filter(item => {
        if(item.checked){
          if(section === listFilter.color){
            section.push(item.value);
          }else{
            section.push(Number(item.value));
          }
        }
    })
}

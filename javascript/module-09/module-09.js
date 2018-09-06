'use strict';

const galleryItems = [
  {
    preview: "img/first-photo-preview.jpeg",
    fullview: "img/first-photo-fullview.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/second-photo-preview.jpeg",
    fullview: "img/second-photo-fullview.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/third-photo-preview.jpeg",
    fullview: "img/third-photo-fullview.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/fourth-photo-preview.jpeg",
    fullview: "img/fourth-photo-fullview.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/fifth-photo-preview.jpeg",
    fullview: "img/fifth-photo-fullview.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/six-photo-preview.jpeg",
    fullview: "img/six-photo-fullview.jpeg",
    alt: "alt text 6"
  },
  {
    preview: "img/seventh-photo-preview.jpeg",
    fullview: "img/seventh-photo-fullview.jpeg",
    alt: "alt text 7"
  },
  {
    preview: "img/eight-photo-preview.jpeg",
    fullview: "img/eight-photo-fullview.jpeg",
    alt: "alt text 8"
  }
];

const container = document.querySelector(".js-image-gallery");

const fullview = document.createElement("div");
fullview.classList.add("fullview");

const firstPhoto = galleryItems.find(item => item.alt === "alt text 1");
fullview.appendChild(createImage(firstPhoto.fullview, null, firstPhoto.alt, 'fullphoto'));

const preview = document.createElement("ul");
preview.classList.add("preview");

galleryItems.forEach(item => {
  const link = document.createElement("li");
  link.appendChild(createImage(item.preview, item.fullview, item.alt, 'photo'));
  preview.appendChild(link);
});

container.append(fullview, preview);

const createPhoto = ({target}) => {
  const fullphoto = document.querySelector('.fullphoto');
  fullphoto.setAttribute("src", target.dataset.fullview);
  fullphoto.setAttribute("alt", target.alt);
};
const photos = Array.from(document.querySelectorAll(".photo"));
photos.forEach(item => item.addEventListener("click", createPhoto));

const activePhoto =({target}) => {
  event.preventDefault();
  photos.forEach(item => {
      if(item !== target){
          item.classList.remove('photo-active');
      }else{
          item.classList.add('photo-active');
      }
  });
};
preview.addEventListener('click', activePhoto);

function createImage(src, datafullview, alt, className) {
  const photo = document.createElement("img");
  if(datafullview !== null){
    photo.classList.add(className);
    photo.setAttribute("src", src);
    photo.setAttribute("data-fullview", datafullview);
    photo.setAttribute("alt", alt);
  }else{
    photo.classList.add(className);
    photo.setAttribute("src", src);
    photo.setAttribute("alt", alt);
  }
  return photo;
}
// /*
//   ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

//   Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так,
//   чтобы можно было создать любое количество галлерей на странице. Функционал плагина
//   аналогичный заданию выше.

//   При создании экземпляра конструктор получает:
//     - items - список элементов для preview
//     - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
//     - defaultActiveItem - номер активного элемента preview по умолчанию

//   Тогда создание экземпляра будет выглядеть следующим образом.
// */

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

// /* Далее плагин работает в автономном режиме */

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



///============Задание повышенной сложности============//////


// class Gallery{
//   constructor(items, parentNode, defaultActiveItem, galleryId){
//     this._items = items;
//     this._parentNode = parentNode;
//     this._defaultActiveItem = defaultActiveItem;
//     this._galleryId = galleryId;

//     this.makeGallery();
//   }
//   makeGallery(){
//     const fullview = document.createElement('div');
//     fullview.classList.add(`fullview-${this._galleryId}`);

//     const firstPhoto = this._items.find(item => item.alt === "alt text 1");
//     fullview.appendChild(this.createImage(firstPhoto.fullview, null, firstPhoto.alt, `fullphoto-${this._galleryId}`));

//     const preview = document.createElement('ul');
//     preview.classList.add(`preview-${this._galleryId}`);

//     this._items.forEach(item => {
//       const link = document.createElement("li");
//       link.appendChild(this.createImage(item.preview, item.fullview, item.alt, `photo-${this._galleryId}`));
//       preview.appendChild(link);
//     });

//     this._parentNode.append(fullview, preview);

//     const createPhoto = ({target}) => {
//       const fullphoto = document.querySelector(`.fullphoto-${this._galleryId}`);
//       fullphoto.setAttribute("src", target.dataset.fullview);
//       fullphoto.setAttribute("alt", target.alt);
//     };
//     const photos = Array.from(document.querySelectorAll(`.photo-${this._galleryId}`));
//     photos.forEach(item => item.addEventListener("click", createPhoto));

//     const activePhoto =({target}) => {
//       event.preventDefault();
//       photos.forEach(item => {
//           if(item !== target){
//               item.classList.remove(`photo-active-${this._galleryId}`);
//               this._defaultActiveItem = 0;
//           }else{
//               item.classList.add(`photo-active-${this._galleryId}`);
//               this._defaultActiveItem = item.id;
//           }
//       });
//     };
//     preview.addEventListener('click', activePhoto);
//   }
//   // createFullView(){
//   //   const fullview = document.createElement('div');
//   //   fullview.classList.add("fullview");

//   //   this.firstPhoto(fullview);
//   // }
//   // firstPhoto(fullview){
//   //   const firstPhoto = this._items.find(item => item.alt === "alt text 1");
//   //   fullview.appendChild(this.createImage(firstPhoto.fullview, null, firstPhoto.alt, 'fullphoto'));
//   // }
//   // createPreView(){
//   //   const preview = document.createElement('ul');
//   //   preview.classList.add("preview");

//   //   this._items.forEach(item => {
//   //     const link = document.createElement("li");
//   //     link.appendChild(this.createImage(item.preview, item.fullview, item.alt, 'photo'));
//   //     preview.appendChild(link);
//   //   });
//   //   this.createFullPhoto(preview);
//   // }
//   // createFullPhoto(preview){
//   //   const createPhoto = ({target}) => {
//   //     const fullphoto = document.querySelector('.fullphoto');
//   //     fullphoto.setAttribute("src", target.dataset.fullview);
//   //     fullphoto.setAttribute("alt", target.alt);
//   //   };
//   //   const photos = Array.from(document.querySelectorAll(".photo"));
//   //   photos.forEach(item => item.addEventListener("click", createPhoto));

//   //   const activePhoto =({target}) => {
//   //     event.preventDefault();
//   //     photos.forEach(item => {
//   //         if(item !== target){
//   //             item.classList.remove('photo-active');
//   //             this._defaultActiveItem = 0;
//   //         }else{
//   //             item.classList.add('photo-active');
//   //             this._defaultActiveItem = item.id;
//   //         }
//   //     });
//   //   };
//   //   preview.addEventListener('click', activePhoto);
//   // }
//   createImage(src, datafullview, alt, className){
//     const photo = document.createElement("img");
//     if(datafullview !== null){
//       photo.classList.add(className);
//       photo.setAttribute("src", src);
//       photo.setAttribute("data-fullview", datafullview);
//       photo.setAttribute("alt", alt);
//     }else{
//       photo.classList.add(className);
//       photo.setAttribute("src", src);
//       photo.setAttribute("alt", alt);
//     }
//     return photo;
//   }

// }

// const gallery = new Gallery(galleryItems, container, 1, 1);
// const gallery2 = new Gallery(galleryItems, container, 1, 2);
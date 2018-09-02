
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: 'img/first-photo-preview.jpeg', fullview: 'img/first-photo-fullview.jpeg', alt: "alt text 1" },
  { preview: 'img/second-photo-preview.jpeg', fullview: 'img/second-photo-fullview.jpeg', alt: "alt text 2" },
  { preview: 'img/third-photo-preview.jpeg', fullview: 'img/third-photo-fullview.jpeg', alt: "alt text 3" },
  { preview: 'img/fourth-photo-preview.jpeg', fullview: 'img/fourth-photo-fullview.jpeg', alt: "alt text 4" },
  { preview: 'img/fifth-photo-preview.jpeg', fullview: 'img/fifth-photo-fullview.jpeg', alt: "alt text 5" },
  { preview: 'img/six-photo-preview.jpeg', fullview: 'img/six-photo-fullview.jpeg', alt: "alt text 6" },
];

const container = document.querySelector('.js-image-gallery');

const fullview = document.createElement('div');
fullview.classList.add('fullview');

const fullphoto = document.createElement('img');
const firstPhoto = galleryItems.find(item => item.alt === 'alt text 1');
fullphoto.classList.add('fullphoto');
fullphoto.setAttribute('src', firstPhoto.fullview);
fullphoto.setAttribute('alt', firstPhoto.alt);

fullview.appendChild(fullphoto);

const preview = document.createElement('ul');
preview.classList.add('preview');

galleryItems.forEach(item => {
    const link = document.createElement('li');
    const photo = document.createElement('img');

    photo.classList.add('photo');
    photo.setAttribute('src', item.preview);
    photo.setAttribute('data-fullview', item.fullview);
    photo.setAttribute('alt', item.alt);

    link.appendChild(photo);
    preview.appendChild(link);
});

container.append(fullview, preview);

const createPhoto = (event) => {
    const target = event.target;
    target.style.outline = '2px solid #00ff04';
    fullphoto.setAttribute('src', target.dataset.fullview);
    fullphoto.setAttribute('alt', target.alt);
};
const photos = Array.from(document.querySelectorAll('.photo'));
photos.forEach(item => item.addEventListener('click', createPhoto));


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
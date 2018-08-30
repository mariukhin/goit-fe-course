'use strict';

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];
  const container = document.querySelector('.container');
  const createPostCard = (post) =>{
    const block = document.createElement('div');
    block.classList.add('post');

    const blockimg = document.createElement('img');
    blockimg.classList.add('post__image');
    blockimg.setAttribute('src', post.img);
    blockimg.setAttribute('alt', 'post image');

    const title = document.createElement('h2');
    title.classList.add('post__title');
    title.textContent = post.title;

    const subtitle = document.createElement('p');
    subtitle.classList.add('post__text');
    subtitle.textContent = post.text;

    const button = document.createElement('a');
    button.classList.add('button');
    button.textContent = 'Read more';
    button.setAttribute('href', post.link);

    block.append(blockimg, title, subtitle, button);
    container.insertBefore(block, null);
};
const createCards = (posts) => {
  posts.forEach(post => createPostCard(post));
};

createCards(posts);
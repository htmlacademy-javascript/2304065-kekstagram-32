import { photoDesc } from './data.js';
import { openBigPicture } from './gallery.js';
import { photosArray } from './api.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function renderPosts(posts) {
  const fragment = document.createDocumentFragment();

  posts.forEach((item) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__img').alt = item.description;
    pictureElement.querySelector('.picture__comments').textContent = item.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;
    pictureElement.dataset.postId = item.id;
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

picturesContainer.addEventListener('click', (evt) => {
  const thumbnailElement = evt.target.closest('.picture');
  if (!thumbnailElement) {
    return;
  }

  const data = photosArray.find((item) => item.id === +thumbnailElement.dataset.postId);

  if (data) {
    openBigPicture(data);
  }
});

export { renderPosts, picturesContainer };

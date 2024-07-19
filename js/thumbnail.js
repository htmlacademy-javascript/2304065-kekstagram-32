const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function renderPosts(posts) {
  posts.forEach((item) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__img').alt = item.description;
    pictureElement.querySelector('.picture__comments').textContent = item.comment.length;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;
    fragment.appendChild(pictureElement);
  });

  pictureContainer.appendChild(fragment);
}

export { renderPosts };

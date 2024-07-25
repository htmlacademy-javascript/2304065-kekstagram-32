const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function renderPosts(posts) {
  posts.forEach((item) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__img').alt = item.description;
    pictureElement.querySelector('.picture__comments').textContent = item.comment.length;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;
    pictureElement.dataset.postId = item.id;
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

export { renderPosts, picturesContainer };

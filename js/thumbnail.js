const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

function renderPosts(posts) {
  const pictureElement = pictureTemplate.cloneNode(true);
  const fragment = document.createDocumentFragment();

  posts.forEach((item) => {
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__img').alt = item.description;
    pictureElement.querySelector('.picture__comments').textContent = item.comment.length;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;
    fragment.append(item);
  });

  pictureContainer.append(fragment);
}

export {renderPosts};

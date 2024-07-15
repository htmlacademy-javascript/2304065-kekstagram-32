const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const fragement = document.createDocumentFragment();

function renderPosts(posts) {
  const pictureElement = pictureTemplate.cloneNode(true);
  console.log(pictureElement);
  posts.forEach((item) => {
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__img').alt = item.description;
    pictureElement.querySelector('.picture__comments').textContent = item.comment;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;
    fragement.append(item);
  });

  pictureContainer.append(fragement);
}

export {renderPosts};

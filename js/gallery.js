import { photoDesc } from './data.js';
import { renderPosts, picturesContainer } from './thumbnail.js';

renderPosts(photoDesc);
console.log(photoDesc);

const body = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImage = bigPictureContainer.querySelector('img');
const bigPictureLikesCount = bigPictureContainer.querySelector('.likes-count');
const bigPictureCommentsCountTotal = bigPictureContainer.querySelector('.social__comment-total-count');
const bigPictureCommentsCountCurrent = bigPictureContainer.querySelector('.social__comment-count');
const bigPictureDesc = bigPictureContainer.querySelector('.social__caption');
const bigPictureContainerClose = bigPictureContainer.querySelector('#picture-cancel');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const commentsList = bigPictureContainer.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

function openBigPicture(evt) {
  evt.preventDefault();

  if (evt.target.closest('.picture')) {
    body.classList.add('modal-open');
    bigPictureContainer.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    renderBigPicture(evt);

    // createNewComment();
    renderComments();
  }
}

function renderBigPicture (evt) {
  bigPictureImage.src = evt.target.src;
  bigPictureImage.alt = evt.target.alt;
  bigPictureLikesCount.textContent = evt.target.parentNode.querySelector('.picture__likes').textContent;
  bigPictureCommentsCountTotal.textContent = evt.target.parentNode.querySelector('.picture__comments').textContent;
  bigPictureDesc.textContent = evt.target.alt;
  bigPictureCommentsCountCurrent.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

function closeBigPicture () {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureContainerClose.addEventListener('click', function () {
  closeBigPicture();
});

function isEscapeEvt (evt) {
  return evt.key === 'Escape';
};

function onDocumentKeydown (evt) {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function createNewComment ({avatar, name, message}) {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
}

function renderComments(comment) {
  commentsList.innerHTML = '';
  const commentFragment = document.createDocumentFragment();
  comment.forEach((item) => {
    const comment = createNewComment(item);
    commentFragment.appendChild(comment);
  });

  commentsList.appendChild(commentFragment);
}

picturesContainer.addEventListener('click', openBigPicture);

// Задача
// Реализовать сценарий просмотра фотографий в полноразмерном режиме. В таком режиме пользователь получает несколько дополнительных возможностей: детально рассмотреть изображение, поставить «лайк», почитать комментарии, оставленные другими пользователями.

// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35" height="35">
//   <p class="social__text">{{текст комментария}}</p>
// </li>

//         Копировать

// Подключите модуль в проект.

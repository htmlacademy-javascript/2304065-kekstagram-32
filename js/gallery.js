import { photoDesc } from './data.js';
import { renderPosts, picturesContainer } from './thumbnail.js';

renderPosts(photoDesc);

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


function openBigPicture(evt) {
  evt.preventDefault();
  body.classList.add('modal-open');

  if (evt.target.closest('.pictures')) {
    bigPictureContainer.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    bigPictureImage.src = evt.target.src;
    bigPictureImage.alt = evt.target.alt;
    bigPictureLikesCount.textContent = evt.target.parentNode.querySelector('.picture__likes').textContent;
    bigPictureCommentsCountTotal.textContent = evt.target.parentNode.querySelector('.picture__comments').textContent;
    bigPictureDesc.textContent = evt.target.alt;
    bigPictureCommentsCountCurrent.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    renderComments ();
  }
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

function renderComments(comments) {
  commentsList.innerHTML = '';
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

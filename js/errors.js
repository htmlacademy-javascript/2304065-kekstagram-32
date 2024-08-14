import { isEscapeEvt } from './utils.js';
import { closeModal, onDocumentKeydown } from './img-upload-form.js';

const body = document.querySelector('body');
const dataLoadingError = document.querySelector('#data-error').content.querySelector('.data-error').cloneNode(true);
const photoUploadingSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const photoUploadingError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = photoUploadingError.querySelector('.error__button');
const successButton = photoUploadingSuccess.querySelector('.success__button');

function onClickBodyError(evt) {
  if (!evt.target.matches('.error__inner') && !evt.target.matches('.error__title')) {
    evt.preventDefault();
    hideUploadError();
  }
}

function onErrorButtonCLick() {
  hideUploadError();
}

function onClickBodySuccess(evt) {
  if (!evt.target.matches('.success__inner') && !evt.target.matches('.success__title')) {
    evt.preventDefault();
    hideUploadSuccess();
  }
}

function onEscapeKeyClickBodyError(evt) {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    hideUploadError();
  }
}

function onEscapeKeyClickBodySuccess(evt) {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    hideUploadSuccess();
  }
}

function showDownloadError() {
  body.appendChild(dataLoadingError);
  setTimeout(() => {
    body.removeChild(dataLoadingError);
  }, 5000);
}

function showUploadError() {
  document.removeEventListener('keydown', onDocumentKeydown);
  errorButton.addEventListener('click', onErrorButtonCLick);
  document.addEventListener('click', onClickBodyError);
  body.addEventListener('keydown', onEscapeKeyClickBodyError);
  body.appendChild(photoUploadingError);
}

function hideUploadError() {
  errorButton.removeEventListener('click', onErrorButtonCLick);
  body.removeEventListener('click', onClickBodyError);
  document.removeEventListener('keydown', onEscapeKeyClickBodyError);
  photoUploadingError.remove();
}

function showUploadSuccess() {
  body.appendChild(photoUploadingSuccess);
  successButton.addEventListener('.click', hideUploadSuccess);
  document.addEventListener('click', onClickBodySuccess);
  document.addEventListener('keydown', onEscapeKeyClickBodySuccess);
}

function hideUploadSuccess() {
  body.removeChild(photoUploadingSuccess);
  successButton.addEventListener('.click', hideUploadSuccess);
  document.removeEventListener('click', onClickBodySuccess);
  document.removeEventListener('keydown', onEscapeKeyClickBodySuccess);
  closeModal();
}

export {showDownloadError, showUploadError, showUploadSuccess};


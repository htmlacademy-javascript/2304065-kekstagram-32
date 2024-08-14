import { isEscapeEvt } from './utils.js';
import { onImgUploadCancelClick, onDocumentKeydown } from './img-upload-form.js';

const body = document.querySelector('body');
const dataLoadingError = document.querySelector('#data-error').content.querySelector('.data-error').cloneNode(true);
const photoUploadingSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const photoUploadingError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = photoUploadingError.querySelector('.error__button');
const successButton = photoUploadingSuccess.querySelector('.success__button');

const onBodyErrorClick = (evt) => {
  if (!evt.target.matches('.error__inner') && !evt.target.matches('.error__title')) {
    evt.preventDefault();
    hideUploadError();
  }
};

const onErrorButtonCLick = () => {
  hideUploadError();
};

const onBodySuccessClick = (evt) => {
  if (!evt.target.matches('.success__inner') && !evt.target.matches('.success__title')) {
    evt.preventDefault();
    onSuccessButtonClick();
  }
};

const onBodyErrorKeydown = (evt) => {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    hideUploadError();
  }
};

const onBodySuccesKeydown = (evt) => {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    onSuccessButtonClick();
  }
};

const showDownloadError = () => {
  body.appendChild(dataLoadingError);
  setTimeout(() => {
    body.removeChild(dataLoadingError);
  }, 5000);
};

const showUploadError = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  errorButton.addEventListener('click', onErrorButtonCLick);
  document.addEventListener('click', onBodyErrorClick);
  body.addEventListener('keydown', onBodyErrorKeydown);
  body.appendChild(photoUploadingError);
};

function hideUploadError() {
  errorButton.removeEventListener('click', onErrorButtonCLick);
  body.removeEventListener('click', onBodyErrorClick);
  document.removeEventListener('keydown', onBodyErrorKeydown);
  photoUploadingError.remove();
}

const showUploadSuccess = () => {
  body.appendChild(photoUploadingSuccess);
  successButton.addEventListener('.click', onSuccessButtonClick);
  document.addEventListener('click', onBodySuccessClick);
  document.addEventListener('keydown', onBodySuccesKeydown);
};

function onSuccessButtonClick() {
  body.removeChild(photoUploadingSuccess);
  successButton.addEventListener('.click', onSuccessButtonClick);
  document.removeEventListener('click', onBodySuccessClick);
  document.removeEventListener('keydown', onBodySuccesKeydown);
  onImgUploadCancelClick();
}

export {showDownloadError, showUploadError, showUploadSuccess};


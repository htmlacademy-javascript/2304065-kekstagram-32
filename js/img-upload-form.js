import { isEscapeEvt } from './utils.js';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');

const pristine = new Pristine(imgUploadForm);

imgUploadForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    console.log('Можно отправить');
  } else {
    console.log('Нетъ');
  }
});

function onDocumentKeydown (evt) {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function onImgUploadEditing() {
  showModal();
}

function showModal() {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal() {
  body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadForm.reset();
}

imgUploadInput.addEventListener('change', onImgUploadEditing);
imgUploadCancel.addEventListener('click', closeModal);


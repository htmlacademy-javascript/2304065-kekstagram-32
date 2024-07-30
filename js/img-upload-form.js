import { isEscapeEvt } from './utils.js';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const imgComment = imgUploadForm.querySelector('.text__description')

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validHashtag = /^#[a-zа-яё0-9]{1, 19}$/i;

function validateComment(comment) {
  return comment.length <= 140;
}

pristine.addValidator(imgComment,
  validateComment,
  'Комментарий не должен быть больше 140 символов'
);

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
  pristine.reset();
}

imgUploadInput.addEventListener('change', onImgUploadEditing);
imgUploadCancel.addEventListener('click', closeModal);


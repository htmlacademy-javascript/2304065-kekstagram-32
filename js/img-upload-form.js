import { isEscapeEvt } from './utils.js';

const MAX_HAHTAG_COUNT = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_TEXT = {
  INVALID_HASHTAG: 'Неправильный хэштег',
  NOT_UNIQUE: 'Хэштег уже существует',
  INVALID_COUNT: `Максимум ${MAX_HAHTAG_COUNT} хэштегов`
};

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const imgComment = imgUploadForm.querySelector('.text__description');
const imgUploadFormSubmit = imgUploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
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

function onSubmitClick(evt) {
  evt.preventDefault();
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
imgUploadForm.addEventListener('submit', onSubmitClick);

function validateComment(comment) {
  return comment.length <= 140;
}

pristine.addValidator(imgComment,
  validateComment,
  'Комментарий не должен быть больше 140 символов'
);



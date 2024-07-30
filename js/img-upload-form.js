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
const imgHashtag = imgUploadForm.querySelector('.text__hashtags');
const imgComment = imgUploadForm.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});


function onDocumentKeydown(evt) {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function cancelEscape(evt) {
  if (isEscapeEvt(evt)) {
    evt.stopPropagation();
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
  imgHashtag.addEventListener('keydown', cancelEscape);
  imgComment.addEventListener('keydown', cancelEscape);
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

pristine.addValidator(
  imgComment,
  validateComment,
  'Комментарий не должен быть больше 140 символов'
);

function normalizeHashtag(string) {
  return string.trim().split(' ').filter((tag) => Boolean(tag.length));
}

function hasValidCount(value) {
  return normalizeHashtag(value).length <= MAX_HAHTAG_COUNT;
}

function hasValid(value) {
  return normalizeHashtag(value).every((tag) => VALID_HASHTAG.test(tag));
}

function hasUniq(value) {
  const lowerCaseTag = normalizeHashtag(value).map((tag) => tag.toLowerCase());
  return lowerCaseTag.length === new Set(lowerCaseTag).size;
}

pristine.addValidator(
  imgHashtag,
  hasValidCount,
  ERROR_TEXT.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  imgHashtag,
  hasValid,
  ERROR_TEXT.INVALID_HASHTAG,
  2,
  true
);

pristine.addValidator(
  imgHashtag,
  hasUniq,
  ERROR_TEXT.NOT_UNIQUE,
  1,
  true
);


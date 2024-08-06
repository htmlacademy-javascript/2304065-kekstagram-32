import { isEscapeEvt } from './utils.js';
import { resetScale } from './scale.js';
import { initSlider, resetSlider } from './effect.js';
import { showUploadError, showUploadSuccess } from './errors.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_TEXT = {
  INVALID_HASHTAG: 'Неправильный хэштег',
  NOT_UNIQUE: 'Хэштег уже существует',
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`
};

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
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

function setFormSubmit(onSuccess) {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      fetch (
        'https://32.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: formData
        }
      )
      .then(onSuccess);
    }
  });
}

function showModal() {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  hashtagInput.addEventListener('keydown', cancelEscape);
  imgComment.addEventListener('keydown', cancelEscape);
}

function closeModal() {
  body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadForm.reset();
  pristine.reset();
  resetScale();
  resetSlider();
}

imgUploadInput.addEventListener('change', onImgUploadEditing);
imgUploadCancel.addEventListener('click', closeModal);

function normalizeHashtag(string) {
  return string.trim().split(' ').filter((tag) => Boolean(tag.length));
}

function hasValidCount(value) {
  return normalizeHashtag(value).length <= MAX_HASHTAG_COUNT;
}

function hasValid(value) {
  return normalizeHashtag(value).every((tag) => VALID_HASHTAG.test(tag));
}

function hasUniq(value) {
  const lowerCaseTag = normalizeHashtag(value).map((tag) => tag.toLowerCase());
  return lowerCaseTag.length === new Set(lowerCaseTag).size;
}

pristine.addValidator(
  hashtagInput,
  hasValidCount,
  ERROR_TEXT.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtagInput,
  hasValid,
  ERROR_TEXT.INVALID_HASHTAG,
  2,
  true
);

pristine.addValidator(
  hashtagInput,
  hasUniq,
  ERROR_TEXT.NOT_UNIQUE,
  1,
  true
);

initSlider();

export {setFormSubmit, closeModal};

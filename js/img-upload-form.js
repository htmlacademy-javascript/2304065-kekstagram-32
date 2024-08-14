import { isEscapeEvt, onInputEscapeKeydown } from './utils.js';
import { resetScale } from './scale.js';
import { initSlider, resetSlider } from './effect.js';
import { showUploadError, showUploadSuccess } from './errors.js';
import { sendData } from './api.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_TEXT = {
  INVALID_HASHTAG: 'Неправильный хэштег',
  NOT_UNIQUE: 'Хэштег уже существует',
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`
};
const IMG_EXTENSIONS = ['png', 'jpeg', 'jpg', 'gif'];

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = imgUploadForm.querySelector('img');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const imgComment = imgUploadForm.querySelector('.text__description');
const buttonUploadSubmit = imgUploadForm.querySelector('.img-upload__submit');

imgUploadInput.addEventListener('change', onImgUploadInputChange);
imgUploadCancel.addEventListener('click', onImgUploadCancelClick);

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const onDocumentKeydown = (evt) => {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    onImgUploadCancelClick();
  }
};

const renderImgPreview = () => {
  const imgUpload = imgUploadInput.files[0];
  const imgName = imgUpload.name.toLowerCase();
  const matches = IMG_EXTENSIONS.some((it) => imgName.endsWith(it));

  if(matches) {
    const imgFiltersPrewievs = imgUploadForm.querySelectorAll('.effects__preview');
    imgUploadPreview.src = URL.createObjectURL(imgUpload);

    imgFiltersPrewievs.forEach((item) => {
      item.style = `background-image: url('${imgUploadPreview.src}')`;
    });
  }
};

function onImgUploadInputChange() {
  showModal();
}

const disabledButtonSubmit = () => {
  buttonUploadSubmit.disabled = true;
  buttonUploadSubmit.textContent = 'Загружаем...';
};

const enabledButtonSubmit = () => {
  buttonUploadSubmit.disabled = false;
  buttonUploadSubmit.textContent = 'Опубликовать';
};

const setFormSubmit = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      disabledButtonSubmit();
      const formData = new FormData(evt.target);
      sendData(formData)
        .then((response) => {
          if(response) {
            showUploadSuccess();
            onImgUploadCancelClick();
          }
        })
        .catch(() => {
          showUploadError();
        })
        .finally(() => {
          enabledButtonSubmit();
        });
    }
  });
};

function showModal() {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  hashtagInput.addEventListener('keydown', onInputEscapeKeydown);
  imgComment.addEventListener('keydown', onInputEscapeKeydown);
  renderImgPreview();
  setFormSubmit();
}

function onImgUploadCancelClick() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadForm.reset();
  pristine.reset();
  resetScale();
  resetSlider();
}

const normalizeHashtag = (string) => string.trim().split(' ').filter((tag) => Boolean(tag.length));

const hasValidCount = (value) => normalizeHashtag(value).length <= MAX_HASHTAG_COUNT;

const hasValid = (value) => normalizeHashtag(value).every((tag) => VALID_HASHTAG.test(tag));

const hasUniq = (value) => {
  const lowerCaseTags = normalizeHashtag(value).map((tags) => tags.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

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

export {setFormSubmit, onImgUploadCancelClick, enabledButtonSubmit, onDocumentKeydown};

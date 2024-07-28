const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');

function onImgUploadEditing() {
  showModal();
}

function showModal() {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
}

imgUploadInput.addEventListener('change', onImgUploadEditing);


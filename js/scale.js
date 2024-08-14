const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const imgUploadForm = document.querySelector('.img-upload__form');
const buttonScaleSmaller = imgUploadForm.querySelector('.scale__control--smaller');
const buttonScaleBigger = imgUploadForm.querySelector('.scale__control--bigger');
const inputScaleValue = imgUploadForm.querySelector('.scale__control--value');
const imgPreview = imgUploadForm.querySelector('.img-upload__preview img');

const scaleImg = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  inputScaleValue.value = `${value}%`;
};

const onButtonScaleSmallerCLick = () => {
  scaleImg(Math.max(parseInt(inputScaleValue.value, 10) - SCALE_STEP, MIN_SCALE));
};

const onButtonScaleBiggerCLick = () => {
  scaleImg(Math.min(parseInt(inputScaleValue.value, 10) + SCALE_STEP, MAX_SCALE));
};

const resetScale = () => {
  scaleImg(MAX_SCALE);
};

buttonScaleSmaller.addEventListener('click', onButtonScaleSmallerCLick);
buttonScaleBigger.addEventListener('click', onButtonScaleBiggerCLick);

export {resetScale};


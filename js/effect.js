const imgUploadForm = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: { min, max },
  start: max,
  step,
  connect: 'lower',
});

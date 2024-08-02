const imgUploadForm = document.querySelector('.img-upload__form');
const sliderElement = imgUploadForm.querySelector('.effect-level__slider');
const effectLevelElement = imgUploadForm.querySelector('.effect-level__value');

function onSliderUpdate() {

}

function createSlider({min, max, step}) {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    start: max,
    step,
    connect: 'lower',
    format: {
      to: function(value) {
        return Number(value);
      },
      from: function(value) {
        return Number(value);
      }
    }
  });

  sliderElement.noUiSlider.on('update', onSliderUpdate);
}



const imgUploadForm = document.querySelector('.img-upload__form');
const sliderElement = imgUploadForm.querySelector('.effect-level__slider');
const sliderContainerElement = imgUploadForm.querySelector('.img-upload__effect-level');
const effectLevelElement = imgUploadForm.querySelector('.effect-level__value');
const imgElement = imgUploadForm.querySelector('.img-upload__preview img');

let chosenEffect = Effect.DEFAULT;

function isDefault() {
  return chosenEffect === Effect.DEFAULT;
}

function setImgStyle() {
  if(isDefault()) {
    imgElement.style.filter = null;
    return;
  }

  const {value} = effectLevelElement;
  const {style, unit} = effectToFilter[chosenEffect];
  imgElement.style.filter = `${style}(${value} ${unit})`;
}

function showSlider() {
  sliderContainerElement.classList.remove('.hidden');
}

function hideSlider() {
  sliderContainerElement.classList.add('.hidden');
}

function onSliderUpdate() {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImgStyle();
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
  hideSlider();
}



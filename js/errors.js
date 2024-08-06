const body = document.querySelector('body');
const dataLoadingError = document.querySelector('#data-error').content.querySelector('.data-error').cloneNode(true);
const photoUploadingSucces = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const photoUploadingError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

function showDownloadError() {
  body.appendChild(dataLoadingError);
  setTimeout(() => {
    body.removeChild(dataLoadingError);
  }, 5000);
}

export {showDownloadError};


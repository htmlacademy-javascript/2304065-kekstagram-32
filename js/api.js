import { renderPosts } from './thumbnail.js';

const body = document.querySelector('body');
const dataLoadingError = document.querySelector('#data-error').content.querySelector('.data-error').cloneNode(true);
let photosArray = [];

function getData() {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Данные не получены :(');
    })
    .catch((err) => {
      body.appendChild(dataLoadingError);
      setTimeout(() => {
        body.removeChild(dataLoadingError);
      }, 5000);
    })
    .then((photos) => {
      console.log(photos);
      renderPosts(photos);
      photosArray = photos;
    })
}

export {getData, photosArray};

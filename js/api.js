import { renderPosts } from './thumbnail.js';
import { showDownloadError } from './errors.js';
import { showImgFilters } from './img-filters.js';

const photosArray = [];

function getData() {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((photos) => {
      renderPosts(photos);
      photosArray.concat(photos);
      showImgFilters();
    })
    .catch(() => {
      showDownloadError();
    });
}

export {getData, photosArray};

import { renderPosts } from './thumbnail.js';
import { showDownloadError } from './errors.js';

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
    })
    .catch(() => {
      showDownloadError();
    });
}

export {getData, photosArray};

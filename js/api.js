import { renderPosts } from './thumbnail.js';

let photosArray = [];

function getData() {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      console.log(photos);
      renderPosts(photos);
      photosArray = photos;
    })
}

export {getData, photosArray};


import { renderPosts } from './thumbnail.js';

function getData() {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      renderPosts(photos);
    })
}

export {getData};


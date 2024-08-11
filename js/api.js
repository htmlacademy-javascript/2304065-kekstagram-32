import { renderPosts } from './thumbnail.js';
import { showDownloadError } from './errors.js';
import { initFilter } from './img-filters.js';

const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const ROUTE = {
  GET: '/data',
  POST: ''
};
const METHOD = {
  GET: 'GET',
  POST: 'POST'
};

const photosArray = [];

async function makeRequest(url, route, method, body = null) {
  fetch(`${url}${route}`, {method, body})
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error();
    })
    // .then((photos) => {
    //   renderPosts(photos);
    //   photosArray.push(...photos);
    //   initFilter();
    // })
    .catch((err) => {
      throw new Error(err.message);
    });
}

// function getData() {
//   fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
//     .then((response) => {
//       if(response.ok) {
//         return response.json();
//       }
//       throw new Error();
//     })
//     .then((photos) => {
//       renderPosts(photos);
//       photosArray.push(...photos);
//       initFilter();
//     })
//     .catch(() => {
//       showDownloadError();
//     });
// }

function getData() {
  makeRequest(SERVER_URL, ROUTE.GET, METHOD.GET);
}

export {getData, photosArray};

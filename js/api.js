import { renderPosts } from './thumbnail.js';
import { showDownloadError } from './errors.js';
import { initFilter } from './img-filters.js';

const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const ROUTE = {
  GET: '/data',
  POST: '',
};
const METHOD = {
  GET: 'GET',
  POST: 'POST',
};

const photosArray = [];

function makeRequest(url, route, method, body = null) {
  fetch(`${url}${route}`, {method, body})
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error();
    })
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

// const BASE_URL = 'https://29.javascript.pages.academy/code-and-magick';
// const Route = {
//   GET_DATA: '/data',
//   SEND_DATA: '/',
// };
// const Method = {
//   GET: 'GET',
//   POST: 'POST',
// };
// const ErrorText = {
//   GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
//   SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
// };

// const load = (route, errorText, method = Method.GET, body = null) =>
//   fetch(`${BASE_URL}${route}`, {method, body})
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .catch(() => {
//       throw new Error(errorText);
//     });

// const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

// const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

// export {getData, sendData};

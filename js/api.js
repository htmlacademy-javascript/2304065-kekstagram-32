const SERVER_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const ROUTE = {
  GET: '/data',
  POST: '/',
};
const METHOD = {
  GET: 'GET',
  POST: 'POST',
};

const photosArray = [];

const makeRequest = (url, route, method, body = null) =>
  fetch(`${url}${route}`, {method, body})
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Что-то пошло не так...');
    });

const getData = () =>
  makeRequest(SERVER_URL, ROUTE.GET, METHOD.GET)
    .then((data) => {
      photosArray.push(...data);
      return photosArray;
    })
    .catch(() => {
      throw new Error('Что-то пошло не так...');
    });

const sendData = (body) => makeRequest(SERVER_URL, ROUTE.POST, METHOD.POST, body);

export {getData, sendData, photosArray};

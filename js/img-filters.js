import { photosArray } from './api.js';
import { renderPosts } from './thumbnail.js';
import { getData } from './api.js';

const IMG_RANDOM_COUNT = 10;

const imgFilters = document.querySelector('.img-filters');
const buttonFilterDefault = imgFilters.querySelector('#filter-default');
const buttonFilterRandom = imgFilters.querySelector('#filter-random');
const buttonFilterDiscussed = imgFilters.querySelector('#filter-discussed');
const pictureContainer = document.querySelector('.pictures');

function clearPosts() {
  pictureContainer.querySelectorAll('.picture').forEach((item) => item.remove());
}

function sortCommentsDescending(postA, postB) {
  return postB.comments.length - postA.comments.length;
}

function sortRandom() {
  return Math.random() - 0.5;
}

function setFilterDefault(evt) {
  evt.preventDefault();
  onFilterClick(evt);
  clearPosts();
  getData();
}

function setFilterRandom(evt) {
  evt.preventDefault();
  onFilterClick(evt);
  clearPosts();
  renderPosts(photosArray.sort(sortRandom).slice(0, IMG_RANDOM_COUNT));
}

function setFilterDiscussed(evt) {
  evt.preventDefault();
  onFilterClick(evt);
  clearPosts();
  renderPosts(photosArray.slice().sort(sortCommentsDescending));
}

function onFilterClick(evt) {
  if (evt.target.classList.contains('img-filters__button--active') || evt.target.classList.contains('img-filters')) {
    return;
  }

  imgFilters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
}

buttonFilterDefault.addEventListener('click', setFilterDefault);
buttonFilterRandom.addEventListener('click', setFilterRandom);
buttonFilterDiscussed.addEventListener('click', setFilterDiscussed);

function initFilter() {
  imgFilters.classList.remove('img-filters--inactive');
}

export {initFilter};

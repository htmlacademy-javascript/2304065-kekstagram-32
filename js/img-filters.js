import { getData, photosArray } from './api.js';
import { renderPosts } from './thumbnail.js';
import { debounce } from './utils.js';

const IMG_RANDOM_COUNT = 10;
const RENDER_POSTS_DELAY = 500;
const FilterTypes = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form')
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

function filter(evt) {
  clearPosts();

  if (evt.target.id === FilterTypes.RANDOM) {
    renderPosts(photosArray.sort(sortRandom).slice(0, IMG_RANDOM_COUNT));
    return;

  }
  if (evt.target.id === FilterTypes.DISCUSSED) {
    renderPosts(photosArray.slice().sort(sortCommentsDescending));
    return;
  }
  if (evt.target.id === FilterTypes.DEFAULT) {
    getData();
  }
}

// function setFilterDefault(evt) {
//   evt.preventDefault();
//   onFilterClick(evt);
//   debounce(() => {
//     clearPosts();
//     getData();
//   },
//   RENDER_POSTS_DELAY
//   )();
// }

// function setFilterRandom(evt) {
//   evt.preventDefault();
//   onFilterClick(evt);
//   debounce(() => {
//     clearPosts();
//     renderPosts(photosArray.sort(sortRandom).slice(0, IMG_RANDOM_COUNT));
//   },
//   RENDER_POSTS_DELAY
//   )();
// }


// function setFilterDiscussed(evt) {
//   evt.preventDefault();
//   onFilterClick(evt);
//   debounce(() => {
//     clearPosts();
//     renderPosts(photosArray.slice().sort(sortCommentsDescending));
//   },
//   RENDER_POSTS_DELAY
//   )();
// }

function onFilterClick(evt) {
  if (evt.target.classList.contains('img-filters__button--active') || evt.target.classList.contains('img-filters')) {
    return;
  }

  imgFilters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
}

// buttonFilterDefault.addEventListener('click', setFilterDefault);
// buttonFilterRandom.addEventListener('click', setFilterRandom);
// buttonFilterDiscussed.addEventListener('click', setFilterDiscussed);

function onFilterFormClick(cb) {
  imgFiltersForm.addEventListener('click',(evt) => filter(evt, cb));
}

function debounceClick() {
  debounce(onFilterClick(), RENDER_POSTS_DELAY);
}

// const debounceClick = debounce(onFilterClick(), RENDER_POSTS_DELAY);

function initFilter() {
  imgFilters.classList.remove('img-filters--inactive');
}

export {initFilter, onFilterClick, debounceClick, onFilterFormClick};

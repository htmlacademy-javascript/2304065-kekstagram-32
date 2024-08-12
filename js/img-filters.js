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
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

function sortCommentsDescending(postA, postB) {
  return postB.comments.length - postA.comments.length;
}

function sortIdInOrder(idA, idB) {
  return idA.id - idB.id;
}

function sortRandom() {
  return Math.random() - 0.5;
}

function filter(evt) {
  onFilterClick(evt);

  if (evt.target.id === FilterTypes.DEFAULT) {
    return renderPosts(photosArray.sort(sortIdInOrder));
  }
  if (evt.target.id === FilterTypes.RANDOM) {
    return renderPosts(photosArray.sort(sortRandom).slice(0, IMG_RANDOM_COUNT));
  }
  if (evt.target.id === FilterTypes.DISCUSSED) {
    return renderPosts(photosArray.slice().sort(sortCommentsDescending));
  }
}

function onFilterClick(evt) {
  if (evt.target.classList.contains('img-filters__button--active') || evt.target.classList.contains('img-filters')) {
    return;
  }

  imgFilters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
}

function delayFilter() {
  const debouncedFilter = debounce(filter, RENDER_POSTS_DELAY);
  imgFiltersForm.addEventListener('click', (evt) => {
    onFilterClick(evt);
    debouncedFilter(evt);
  });

}


function initFilter() {
  imgFilters.classList.remove('img-filters--inactive');
}

export {initFilter, delayFilter};

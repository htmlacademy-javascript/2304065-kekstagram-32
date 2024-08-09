import { getRandomInteger } from './utils.js';

const IMG_RANDOM_COUNT = 10;
const FilterType = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const imgFilters = document.querySelector('.img-filters');

function showImgFilters() {
  imgFilters.classList.remove('img-filters--inactive');
}

function sortCommentsDescending(postA, postB) {
  return postB.comments.length - postA.comments.length;
}

export {showImgFilters};

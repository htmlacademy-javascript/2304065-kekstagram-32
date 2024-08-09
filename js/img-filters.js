import { getRandomInteger } from './utils.js';

const IMG_RANDOM_COUNT = 10;
const FilterType = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

let currentFilterType = FilterType.DEFAULT;
let posts = [];

const imgFilters = document.querySelector('.img-filters');

function sortCommentsDescending(postA, postB) {
  return postB.comments.length - postA.comments.length;
}

function getFilteredPosts() {
  switch(currentFilterType) {
    case FilterType.RANDOM:
      return [...posts].sort(getRandomInteger).slice(0, IMG_RANDOM_COUNT);
    case FilterType.DISCUSSED:
      return [...posts].sort(sortCommentsDescending);
    default:
      return [...posts];
  }
}

function onFilterTypeClick(cb) {
  imgFilters.addEventListener('click', (evt) => {
    if(!evt.target.classList.contains('.img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if(clickedButton.id === currentFilterType) {
      return;
    }

    imgFilters
      .querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilterType = clickedButton.id;
    cb(getFilteredPosts());
  });
}

function initFilter(loadedPosts, cb) {
  imgFilters.classList.remove('img-filters--inactive');
  posts = [...loadedPosts];
  onFilterTypeClick(cb);
}

export {getFilteredPosts, initFilter};

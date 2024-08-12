import './img-upload-form.js';
import { getData } from './api.js';
import { initFilter, delayFilter } from './img-filters.js';
import { showDownloadError } from './errors.js';
import { renderPosts } from './thumbnail.js';

getData().then((photos) => {
  renderPosts(photos);
  initFilter();
  delayFilter();
})
  .catch(() => {
    showDownloadError();
  });


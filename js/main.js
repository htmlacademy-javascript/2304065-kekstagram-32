import './img-upload-form.js';
import { getData, photosArray } from './api.js';
import { initFilter } from './img-filters.js';
import { showDownloadError } from './errors.js';
import { renderPosts } from './thumbnail.js';
import { showUploadSuccess, showUploadError } from './errors.js';
import { enabledButtonSubmit } from './img-upload-form.js';

getData().then((photos) => {
  renderPosts(photos);
  photosArray.push(...photos);
  initFilter();
})
  .catch(() => {
    showDownloadError();
  });


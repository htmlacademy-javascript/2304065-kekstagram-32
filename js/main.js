import './img-upload-form.js';
import { getData } from './api.js';
import { setFormSubmit } from './img-upload-form.js';
import { initFilter } from './img-filters.js';
import { showDownloadError } from './errors.js';
import { renderPosts } from './thumbnail.js';

// setFormSubmit();
try {
  getData();
  renderPosts(getData());
  initFilter();
} catch {
  showDownloadError();
}

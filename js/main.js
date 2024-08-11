import './img-upload-form.js';
import { getData, photosArray } from './api.js';
import { setFormSubmit } from './img-upload-form.js';
import { initFilter } from './img-filters.js';
import { showDownloadError } from './errors.js';
import { renderPosts } from './thumbnail.js';

getData(renderPosts);
  // .then((photos) => {
  //   console.log(photos);
  //   renderPosts(photos);
  //   photosArray.push(...photos);
  //   initFilter();
  // })
  // .catch(() => {
  //   showDownloadError();
  // });


// setFormSubmit();
// try {
//   getData();
//   renderPosts(getData());
//   initFilter();
// } catch {
//   showDownloadError();
// }

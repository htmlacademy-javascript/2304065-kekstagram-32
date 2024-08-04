import { photoDesc } from './data.js';
import { renderPosts } from './thumbnail.js';
import './img-upload-form.js';
import { getData } from './api.js';

renderPosts(photoDesc);
getData();

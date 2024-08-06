import './img-upload-form.js';
import { getData } from './api.js';
import { setFormSubmit, closeModal } from './img-upload-form.js';

getData();
setFormSubmit(closeModal);

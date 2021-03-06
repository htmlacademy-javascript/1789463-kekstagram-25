import { isEscapeKey } from './util.js';
import { subscribeFormValidation } from './validation.js';
import { initScaling } from './scale.js';
import { initSlider } from './slider.js';

const form = document.querySelector('.img-upload__form');
const fileUpload = form.querySelector('#upload-file');
const imageUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancel = form.querySelector('#upload-cancel');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const openImageUpload = () => {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  initScaling();
  initSlider();
};

const closeImageUpload = (listener) => {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', listener);
  form.reset();
};

const onImageEscKeydown = (evt) => {
  if (isEscapeKey(evt) && evt.target !== textHashtags && evt.target !== textDescription) {
    evt.preventDefault();
    closeImageUpload(onImageEscKeydown);
  }
};

const onUploadCancel = () => {
  closeImageUpload(onImageEscKeydown);
};

const closeForm = () => {
  closeImageUpload(onImageEscKeydown);
};

const onImageUpload = () => {
  openImageUpload();
  document.addEventListener('keydown', onImageEscKeydown);
  uploadCancel.addEventListener('click', onUploadCancel);
};

const initUpload = () => {
  fileUpload.addEventListener('change', onImageUpload);
  subscribeFormValidation();
};


export { initUpload, closeForm };

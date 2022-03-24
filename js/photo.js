import {getPhoto} from './data.js';

const getPictures = document.querySelector('.pictures');
const getPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureCase = getPhoto();
const pictureFragment = document.createDocumentFragment();

pictureCase.forEach(({comments, likes, url}) => {
  const pictureElement = getPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__img').src = url;
  pictureFragment.appendChild(pictureElement);
});

getPictures.appendChild(pictureFragment);

window.console.log(getPictures);

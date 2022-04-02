import './photo.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const pictureImg = document.querySelector('.picture__img');


pictureImg.onclick = function () {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

bigPictureCancel.onclick = function () {
  bigPicture.classList.add('hidden');
};

document.addEventListener('keydown', (evt) => {
  if(evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
  }
});

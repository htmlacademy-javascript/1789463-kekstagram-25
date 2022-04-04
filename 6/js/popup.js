import { clearSimilarList, renderSimilarList } from './photo.js';
import { isEscapeKey, isEnterKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPicturesImg = document.querySelector('.big-picture__img');
const commentsLoader = document.querySelector('.comments-loader');
// const description = bigPicture.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
// const pictureImg = document.querySelector('.picture__img');


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  renderSimilarList();

  document.addEventListener('keydown', onPopupEscKeydown);
}


function closeModal() {
  bigPicture.classList.add('hidden');
  clearSimilarList();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

bigPicturesImg.addEventListener('click', () => {
  openModal();
});

bigPicturesImg.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openModal();
  }
});

bigPictureCancel.addEventListener('click', () => {
  closeModal();
});

bigPictureCancel.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal();
  }
});


/* document.addEventListener('keydown', () => {
  if(isEscapeKey === 27) {
    bigPicture.classList.add('hidden');
  }
}); */

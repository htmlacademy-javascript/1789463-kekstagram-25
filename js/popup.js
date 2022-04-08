import { isEscapeKey, isEnterKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const bodySelector = document.querySelector('body');
const description = bigPicture.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const pictureImg = document.querySelector('.picture__img');


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function socialComment(data) {
  return `<li class="social__comment">
    <img class="social__picture"
    src= ${data.avatar}
    alt= ${data.name} width="35" height="35">
    <p class="social__text"> ${data.message} </p>
    </li>`;
}

const getUserComments = (data) => {
  const userComments = data.map((comment) => socialComment(comment));
  return userComments.join('');
};


function openModal (photo)  {
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPicture.src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__comments').innerHTML = getUserComments(photo.comments);
  description.textContent = photo.description;

  document.addEventListener('keydown', onPopupEscKeydown);
}


function closeModal() {
  bigPicture.classList.add('hidden');
  bodySelector.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

pictureImg.addEventListener('click', () => {
  openModal();
});

pictureImg.addEventListener('keydown', (evt) => {
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

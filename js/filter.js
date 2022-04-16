import {debounce} from './util.js';

const imageFilters = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__form button');

const SHUFFLED_LIMIT = 10;

let filterChangeCallback = null;

const getShuffledPhotos = (pictures) => pictures.slice().sort(() => Math.random() - 0.5).slice(0, SHUFFLED_LIMIT);
const getDiscussedPhotos = (pictures) => pictures.slice().sort((a, b) => b.comments.length - a.comments.length);

const onButtonClick = (evt) => {
  const activeButton = imageFilters.querySelector('button.img-filters__button--active');

  if (activeButton !== evt.target) {
    activeButton.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }

  filterChangeCallback(evt.target.id);
};

filterButtons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
});

const setFilterChange = (callback) => {
  filterChangeCallback = debounce(callback);
};

const showFilters = () => {
  imageFilters.classList.remove('img-filters--inactive');
};


export {setFilterChange, showFilters, getShuffledPhotos, getDiscussedPhotos };

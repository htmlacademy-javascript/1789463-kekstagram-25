import { renderPictures } from './thumbnail.js';
import { getData } from './api.js';
import {setFilterChange, showFilters, getShuffledPhotos, getDiscussedPhotos} from './filter.js';

const showGallery = () => {
  getData(renderPictures);
  showFilters();
  setFilterChange();
  getShuffledPhotos();
  getDiscussedPhotos();
};

export { showGallery };

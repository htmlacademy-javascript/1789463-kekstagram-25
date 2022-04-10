import { getRandomNumber, getRandomItem } from './util.js';

const MESSAGES_SET = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Александр',
  'Адрей',
  'Владимир',
  'Вернон',
  'Владислав',
  'Григорий',
  'Дмитрий',
  'Емеля',
  'Елисей',
  'Житомир',
  'Тарас',
  'Николай',
];

const DESCRIPTIONS = [
  'Просто фото',
  'Хорошо',
  'Класс!',
  'Великолепная фотография',
];

const СOMMENT_AMOUNT = 16;

const createComments = (photoNumber) => {
  const comments = [];

  for (let i = 1; i <= СOMMENT_AMOUNT; i++) {
    const comment = {
      id: photoNumber + i / 10,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: getRandomItem(MESSAGES_SET),
      name: getRandomItem(NAMES),
    };
    comments.push(comment);
  }

  return comments;
};

const createPhoto = (photoNumber) => ({
  id: photoNumber,
  url: `photos/${photoNumber}.jpg`,
  description: getRandomItem(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: createComments(photoNumber),
});

const createPhotos = (count) => {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};

export { createPhotos };

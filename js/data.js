import {getRandomNum, getRandomArrayElement} from './util.js';

const NAMES = [
  'Артем',
  'Богдан',
  'Владислав',
  'Георгий',
  'Дмитрий',
  'Егор',
];

const DESCRIPTIONS = [
  'УРА!',
  'Отдых',
  'Непонятно',
  'Эврика',
  'ЧТО???',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const createComments = () => {
  const randomAvatar = getRandomNum(0, 6);
  const randomIdComment = getRandomNum(1, 1000);

  return {
    id: randomIdComment,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createDescriptionPhoto = (index) => {
  const randomLikes = getRandomNum(15, 200);
  const randomId =  getRandomNum(1, 25);

  return{
    id: randomId,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: randomLikes,
    comments: createComments(getRandomNum(0, 6)),
  };
};

const getPhoto = () => {
  const photo = [];
  for (let i = 1; i <=25; i++) {
    photo.push(createDescriptionPhoto(i));
  }

  return photo;
};

export {getPhoto};

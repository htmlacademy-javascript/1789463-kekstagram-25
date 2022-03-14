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

function getRandomNum(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkLengthString(str, length) {
  return str.length <= length;
}

checkLengthString('advadfv', 20);


const createComments = () => {
  const randomAvatar = getRandomNum(0, 6);

  return {
    id: getRandomNum(1, 25),
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: MESSAGES[getRandomNum(0, MESSAGES.length -1)],
    name: NAMES[getRandomNum(0, NAMES.length - 1)],
  };
};

const createDescriptionPhoto = (index) => {
  const randomLikes = getRandomNum(15, 200);
  return{
    id: index,
    url: `photos/${index}.jpg`,
    description: DESCRIPTIONS[getRandomNum(0, DESCRIPTIONS.length -1)],
    likes: randomLikes,
    comments:[createComments(),createComments()],
  };
};

createDescriptionPhoto();

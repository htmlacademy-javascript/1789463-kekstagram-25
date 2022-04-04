function getRandomNum(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkLengthString(str, length) {
  return str.length <= length;
}

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const getRandomArrayElement = (elements) => elements[getRandomNum(0, elements.length - 1)];

export {getRandomNum, checkLengthString, getRandomArrayElement, isEnterKey, isEscapeKey};

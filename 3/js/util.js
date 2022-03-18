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

const getRandomArrayElement = (elements) => elements[getRandomNum(0, elements.length - 1)];

export {getRandomNum, checkLengthString, getRandomArrayElement};

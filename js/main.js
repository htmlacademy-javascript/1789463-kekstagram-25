function getRandomNum(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomNum(2, 10);

function checkLengthString(str, length) {
  return str.length <= length;
}

checkLengthString('advadfv', 20);

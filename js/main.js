function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min));
}

getRandomNum(2, 10);

function checkLengthString(str, maxlength) {
  if (str.length <= maxlength) {
    return true;
  }
  return false;
}

checkLengthString('advadfv', 20);

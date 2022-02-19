function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min));
}


function checkLengthString(x, max) {
  if (x <= max.length) {
    return true;
  }
  return false;
}


function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createUniqNumber (min, max) {
  const previousNumb = [];

  return function() {
    let currentNum = getRandomInteger(min, max);
    if (previousNumb.length >= (max - min + 1)) {
      return null;
    }
    while (previousNumb.includes(currentNum)) {
      currentNum = getRandomInteger(min, max);
    }
    previousNumb.push(currentNum);
    return currentNum;
  };
}

function isEscapeEvt (evt) {
  return evt.key === 'Escape';
};

export { createUniqNumber, getRandomInteger, isEscapeEvt};

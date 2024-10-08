const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createUniqNumber = (min, max) => {
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
};

const isEscapeEvt = (evt) => evt.key === 'Escape';

const onInputEscapeKeydown = (evt) => {
  if (isEscapeEvt(evt)) {
    evt.stopPropagation();
  }
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { createUniqNumber, getRandomInteger, isEscapeEvt, debounce, onInputEscapeKeydown};

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createUniqNumber(minNum, maxNum) {
  const previousNumb = [];

  return function () {
    let currentNum = getRandomInteger(minNum, maxNum);
    while (previousNumb.includes(currentNum)) {
      if (previousNumb.length >= (minNum - maxNum + 1)) {
        return null;
      }
      currentNum = getRandomInteger(minNum, maxNum);
    }
    previousNumb.push(currentNum);
    return currentNum;
  };
}

export {getRandomInteger, createUniqNumber};

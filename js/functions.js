// проверка максимальной длины строки

const checkStringLength = (string, maxLength) => {
  // линтер не проходит
  // return (string.length <= maxLength);
  const correctStringLength = string.length <= maxLength;
  return correctStringLength;
};

checkStringLength(); // если не вызывать функцию - ошибка линтера

// проверка на палиндром

function checkPalindrome(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  const stringNormalize = string;
  let revertString = '';
  for (i = stringNormalize.length - 1; i >= 0; i--) {
    revertString += stringNormalize.at(i);
  }
  const palindrome = (revertString === stringNormalize);
  return palindrome;
};

checkPalindrome();

// проверка максимальной длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

// проверка на палиндром

function checkPalindrome(string) {
  const stringNormalize = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    reverseString += stringNormalize.at(i);
  }

  return (reverseString === stringNormalize);
}

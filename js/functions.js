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

// поиск и вывод цифр в строке

function checkStringNumber(string) {
  let listNumbers;

  if (typeof string === 'string') {
    listNumbers = parseInt(string, 10);
    return listNumbers;
  }
}

// фукнция проверяет символы в строке и отдает цифры
// - проверить тип  данных


// -- если строка
// --- перебрать строку
// --- привести к десятичным числам
// --- записать каждую цифру в переменную

// -- если число
// --- перевести в строку
// --- записать каждую цифру в переменную

// - вернуть строку


// проверка максимальной длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength();

// проверка на палиндром

function checkPalindrome(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  const stringNormalize = string;
  let revertString = '';
  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    revertString += stringNormalize.at(i);
  }

  const palindrome = (revertString === stringNormalize);
  return palindrome;
}

checkPalindrome();

// поиск и вывод цифр в строке

function checkStringNumber(string) {
  let listNumbers;

  if (typeof string === 'string') {
    listNumbers = parseInt(string, 10);
    return listNumbers;
  }
}

checkStringNumber();

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


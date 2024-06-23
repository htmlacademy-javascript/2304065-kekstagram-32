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
  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    revertString += stringNormalize.at(i);
  }

  const palindrome = (revertString === stringNormalize);
  return palindrome;
}

checkPalindrome();

// поиск и вывод цифр в строке

function checkStringNumber(string) {

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


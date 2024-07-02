const NICKNAME_COMMENT = [
  'Кекс',
  'Мартин',
  'Барсик',
  'Михаил',
  'Николя',
  'Степашка'
];

const MESSAGE_COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const QUANTITY_PHOTO = 25;

const MIN_ID_PHOTO = 1;
const MAX_ID_PHOTO = 25;

const MIN_ID_URL = 1;
const MAX_ID_URL = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_ID_COMMENTS = 0;
const MAX_ID_COMMENTS = 300;

const MIN_ID_AVATAR = 1;
const MAX_ID_AVATAR = 6;

const getRandomInteger = (a, b) => {
  let lower = Math.ceil(Math.min(a, b));
  let upper = Math.floor(Math.max(a, b));
  let result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// итоговый объект должен быть таков

const photoDesc = () => {
  const randomId = getRandomInteger(MIN_ID_PHOTO, MAX_ID_PHOTO);
  const randomUrl = getRandomInteger(MIN_ID_URL, MAX_ID_URL);
  const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const randomComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const randomAvatar = getRandomInteger(MIN_ID_AVATAR, MAX_ID_AVATAR);
  const randomIdComments = getRandomInteger(MIN_ID_COMMENTS, MAX_ID_COMMENTS);
  const randomNickname = getRandomInteger(0, NICKNAME_COMMENT.length - 1);

  return {
    id: randomId,
    url: `photos/${randomUrl}.jpg`,
    description: '#отпуск' + 'Сейчас я дома уже',
    likes: randomLikes,
    comments: {
      id: randomIdComments,
      avatar: `img/avatar-${randomAvatar}.svg`,
      message: MESSAGE_COMMENT[randomComments],
      name: NICKNAME_COMMENT[randomNickname]
    }
  }
};

// В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

// Структура каждого объекта должна быть следующей:

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }


// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

//
//
//
//
//
//

// Подставляйте случайное имя в поле name.

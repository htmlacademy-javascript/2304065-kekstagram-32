import { createUniqNumber, getRandomInteger } from './utils.js';

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
const MAX_ID_COMMENTS = 999;

const MIN_ID_AVATAR = 1;
const MAX_ID_AVATAR = 6;

const randomId = createUniqNumber(MIN_ID_PHOTO, MAX_ID_PHOTO);
const randomUrl = createUniqNumber(MIN_ID_URL, MAX_ID_URL);

function createPhotoDesc() {
  const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const randomCommentsQuantity = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const comment = Array.from({length: randomCommentsQuantity}, createComment);

  return {
    id: randomId(),
    url: `photos/${randomUrl()}.jpg`,
    description: 'Сейчас я дома уже',
    likes: randomLikes,
    comment
  };
}

const randomIdComments = createUniqNumber(MIN_ID_COMMENTS, MAX_ID_COMMENTS);

function createComment() {
  const randomCommentsMessage = getRandomInteger(0, MESSAGE_COMMENT.length - 1);
  const randomAvatar = getRandomInteger(MIN_ID_AVATAR, MAX_ID_AVATAR);
  const randomNickname = getRandomInteger(0, NICKNAME_COMMENT.length - 1);

  return {
    id: randomIdComments(),
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: MESSAGE_COMMENT[randomCommentsMessage],
    name: NICKNAME_COMMENT[randomNickname]
  };
}

const photoDesc = Array.from({length: QUANTITY_PHOTO}, createPhotoDesc);

export {photoDesc};

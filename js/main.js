
const QUANTITY_PHOTOS = 25;

const DESCRIPTIONS = [
  'Утро в поле',
  'Моя первая машина',
  'Завтра будет лучше',
  'Букет',
  'Уютная комната',
  'Поле',
];

const MESSAGES = [
  'Всё отлично!В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент ?!'
];

const NAMES = [
  'Артём',
  'Игорь',
  'Диана',
  'Кирилл',
  'Лилия',
  'Оксана',
  'Сергей',
  'Дмитрий',
  'Александра',
  'Эльдар'
];

const LIKES = {
  MIN: 15,
  MAX: 200
};

const COMMENTS = {
  MIN: 10000,
  MAX: 1_000_000
};

const ID = {
  MIN: 100,
  MAX: 1000
};

const AVATAR = {
  MIN: 1,
  MAX: 6
};

// Функция рандомных числел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция рандомных элементов
const getRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

// Функция для создания комментария
const getComment = () => ({
  id: getRandomInteger(ID.MIN, ID.MAX),
  avatar: `img/avatar-${getRandomInteger(AVATAR.MIN, AVATAR.MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

// Функция для создания кол-ва комментариев
const getComments = () => {
  const quantityComments = getRandomInteger(COMMENTS.MIN, COMMENTS.MAX);
  const comments = [];
  for (let j = 1; j <= quantityComments; j++) {
    comments.push(getComment(j));
  }
  return comments;
};

// Функция для создания фото
const getPhoto = (k) => ({
  id: k,
  url: `./photos/${k}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: getComments()
});

const getPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(getPhoto(i));
  }
  return photos;
};

console.log(getPhotos(QUANTITY_PHOTOS));




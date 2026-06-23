
//Функция для проверки длины строки

const checkString = (string, maxLength) => string.length <= maxLength;

// console.log(checkString('Hello',3))
// console.log(checkString('Hello',7))


//Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  const ordered = string
    .replaceAll(' ', '')
    .toLowerCase();
  let reversed = '';
  for (let i = ordered.length - 1; i >= 0; i--) {
    reversed += ordered[i];
  }
  return ordered === reversed;
};

// console.log(isPalindrome('Anna'))
// console.log(isPalindrome('Hello'))
// console.log(isPalindrome('Лёша на полке клопа нашёл '))


//Функция извлечения цифр

const extractDigits = (string) => {
  if (typeof string === 'number') {
    string = string.toString();
  }
  let digits = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char >= '0' && char <= '9') {
      digits += char;
    }
  }
  return parseInt(digits, 10);
};

// console.log(extractDigits('hello212'))
// console.log(extractDigits('goodbye'))

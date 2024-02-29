// За допомогою prompt потрібно ввести два числа, порахувати їх суму
// і вивести її за допомогою alert.

// const num1 = prompt('Введіть перше число: ');
// console.log(num1);
// const num2 = prompt('Введіть друге число: ');
// console.log(num2);
// const result = Number(num1) + Number(num2);
// alert(`Сума чисел ${num1} і ${num2} дорівнює: ${result}`);

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(num) {
//   const minutes = num % 60;
//   const days = ((num - minutes) / 60) % 23;
//   const hours = (num - minutes) / 60 - days * 24;
//   let currentTime = `${days}d:${hours}h:${minutes}m`;
//   console.log(currentTime);
// }

// formatMinutesToTime(1450);
// formatMinutesToTime(11450);
// formatMinutesToTime(150);
// formatMinutesToTime(999);
// formatMinutesToTime(25000);

// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

// За допомогою prompt ввести число і вивести за допомогою alert повідомлення
// парне це число, чи непарне.

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function getFileName(file) {
//   const findDot = file.indexOf('.');
//   let result = '';
//   if (findDot && findDot >= 0) {
//     return (result = file.slice(0, file.indexOf('.')));
//   } else {
//     return (result = file.slice());
//   }
// }

// console.log(getFileName('style.css'));
// console.log(getFileName('styles'));
// console.log(getFileName('hero'));
// console.log(getFileName('main'));
// console.log();

// let url = 'https:/youtube.com/my-site1fafasdfasdfasdfasdf';

// function checkUrl(originalUrl) {
//   if (originalUrl.includes('my-site', -1) && !originalUrl.endsWith('/')) {
//     return originalUrl + '/';
//   } else {
//     return originalUrl;
//   }
// }

// const res_1 = checkUrl(url);
// console.log(res_1);

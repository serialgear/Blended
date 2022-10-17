/**
 * Отображение времени (if...else)
 *
 * Напиши скрипт для отображения часов и минут в консоли браузера
 * в виде строки формата "14 ч. 26 мин.". Если значение переменной
 * `minutes` равно `0`, то выводи строку `"14 ч."`, без минут.
 */

// const minutes = 0;
// const hours = 14;
// // if (minutes = 0) {
// if (0 === minutes) {
//   console.log(`${hours} ч.`);
// } else {
//   console.log(`${hours} ч. ${minutes} мин.`);
// }

// console.log("14 ч. 26 мин.");

const minutes = 26;
const hours = 14;

// Boolean ? true : false

// 0 === minutes
//   ? console.log(`${hours} ч.`)
//   : console.log(`${hours} ч. ${minutes} мин.`);

function logTime(hours, minutes) {
  if (0 === minutes) {
    return `${hours} ч.`;
  }
  return `${hours} ч. ${minutes} мин.`;
}
console.log(logTime(14, 26));

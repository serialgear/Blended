/**
 * Ветвеления
 *
 * Напиши скрипт, который выводит в консоль строку "Это положительное число",
 * если в prompt пользователь ввел число больше нуля. Если был введен ноль,
 * выводи в консоль строку `"Это ноль"`. Если передали отрицательное число,
 * в консоли должна быть строка `"Это отрицательное число"`.
 */

let userInput = prompt("Введите число");
// if (userInput === null) {
//   console.log("Не ввели число");
// }
// if (0 < userInput) {
//   console.log("Это положительное число");
// } else if (0 === userInput) {
//   console.log("Это ноль");
// } else {
//   console.log("Это отрицательное число");
// }

// console.log(userInput);

function logMessage(userInput) {
  if (null === userInput) {
    return "Нажали Cancel";
  }
  userInput = Number(userInput);

  if (0 < userInput) {
    return "Это положительное число";
  }
  if (0 === userInput) {
    return "Это ноль";
  }
  return "Это отрицательное число";
}

console.log(logMessage(userInput));

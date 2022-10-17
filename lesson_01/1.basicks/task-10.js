/**
 * Цикл for
 *
 * Напиши цикл for который выводит в консоль браузера числа
 * по возрастанию от `min` до `max`, но только если число кратно 5.
 */

// function displayNumbers(min, max) {
//   for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// function displayNumbers(min, max) {
//   for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//       continue;
//     }
//     console.log(i);
//   }
// }

function displayNumbers(min, max) {
  for (let i = min; i <= max; i += 1) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}

displayNumbers(2, 25);

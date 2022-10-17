/**
 * Дедлайн сдачи проекта (switch)
 *
 * Выполни рефакторинг кода задачи номер  `switch`.
 *
 */

const deadLine = 10;

// if (0 === deadLine) {
//   console.log("Сегодня");
// } else if (1 === deadLine) {
//   console.log("Завтра");
// } else if (2 === deadLine) {
//   console.log("Послезавтра");
// } else {
//   console.log("Дата в будущем");
// }

switch (deadLine) {
  case 0:
    console.log("Сегодня");
    break;
  case 1:
    console.log("Завтра");
    break;
  case 2:
    console.log("Послезавтра");
    break;
  default:
    console.log("Дата в будущем");
}

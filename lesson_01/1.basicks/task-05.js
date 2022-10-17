/**
 * Форматирование ссылки (includes и логическое «И»)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ, но только в том случае, если
 * в `link` есть подстрока `"my-site"`. Используй конструкцию `if...else`.
 * https://my-site.com/about
 */

let link = "https://my-site.com/about";

// if (!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }

// const end = !link.endsWith("/");
// const correctWord = link.includes("my-site");

// if (end && correctWord) {
//   link += "/";
// }
// console.log(link);

function appendUrl(link, host) {
  const end = !link.endsWith("/");
  const correctWord = link.includes(host);

  if (end && correctWord) {
    return (link += "/");
  }
  return link;
}

console.log(appendUrl(link, "my-site"));

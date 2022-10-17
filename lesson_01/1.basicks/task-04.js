/**
 * Форматирование ссылки (endsWith)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ. Используй конструкцию `if...else`.
 * https://my-site.com/about
 * https://my-site.com/about/
 */

/* "Hello world and Alex".startsWith("Hello");
true;
"Hello world and Alex".startsWith("Pizza");
false;
"Hello world and Alex".endsWith("Pizza");
false;
"Hello world and Alex".endsWith("Alex");
true; */

let link = "https://my-site.com/about/";

if (!link.endsWith("/")) {
  link += "/";
}
console.log(link);

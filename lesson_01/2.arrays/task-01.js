// Задача 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

const genres = ['Jazz', 'Blues'];

// genres.push('Рок-н-ролл');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// const firstItem = genres.shift();
// console.log(firstItem);
// genres.unshift('Country', 'Reggy')

genres.splice(0, 0, 'Country', 'Reggy');

console.log(genres);

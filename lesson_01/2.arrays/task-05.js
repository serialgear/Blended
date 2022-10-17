// Задача 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

const str = 'Hello world and Alex. Welcome to JS';

// const arr = str.split(' ');

// arr.shift();
// arr.pop();

// const newStr = arr.join(' ');

// console.log(newStr);
// __________________________________________________________

// const arr = str.split(' ');
// const newArr = [];
// for (let idx = 1; idx < arr.length - 1; idx += 1) {
//     newArr.push(arr[idx]);
// }
// // console.log(newArr);

// const newStr = newArr.join(' ');

// console.log(newStr);

// _________________________________________________________

const arr = str.split(' ');
const newArr = [];
for (let idx = 0; idx < arr.length; idx += 1) {
    if (0 === idx || arr.length - 1 === idx) {
        continue;
    }
    
    newArr.push(arr[idx]);
}
// console.log(newArr);

const newStr = newArr.join(' ');

console.log(newStr);





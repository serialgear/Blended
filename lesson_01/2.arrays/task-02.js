// Задача 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

const values = '5 8';
const arrayNumbers = values.split(' ');
const res = arrayNumbers[0] * arrayNumbers[1];

console.log(res);

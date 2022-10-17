// Задача 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

const string = "abcdefg";

// const arrStr = string.split('').reverse().join('');

// console.log(arrStr);

// _________________________________________
// const arr = string.split('');
// const newArray = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
    
// }
// const rs = newArray.join('');
// console.log(rs);

// ______________________________

const arr = string.split('');
let rs = '';

for (let i = arr.length - 1; i >= 0; i--) {
    rs += arr[i];
    
}

console.log(rs);


// Задача 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.
const names = 'Vova,Sara,Bob,Mike';
const phones = '555,444,333,888';

const namesArr = names.split(',');
const phonesArr = phones.split(',');

// for (let idx = 0; idx < namesArr.length; idx += 1) {
//     console.log(`${namesArr[idx]} - ${phonesArr[idx]}`);
// }

for (const item of namesArr) {
    let idx = namesArr.indexOf(item);
    
    // console.log(idx);
    console.log(`${item} - ${phonesArr[idx]}`);
}
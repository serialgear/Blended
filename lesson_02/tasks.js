// ====================task-01============================
// Отримати масив імен всіх користувачів (поле name).

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ======================task-02===========================
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// ========================task-03=============================
// Отримати масив імен користувачів за статтю (поле gender).

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ==================================task-04================================
// Отримати масив тільки неактивних користувачів (поле isActive).

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// =====================================task-05================================
// Отримати користувача (не масив) по email (поле email, він унікальний).

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

// =====================================task-06=====================================
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// ================================task-07==========================================
// Отримати загальну суму балансу (поле balance) всіх користувачів.

// console.log(calculateTotalBalance(users)); // 20916

// ================================task-08=======================================
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ====================================task-09================================
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ==================================task-10=====================================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Задача 8 - использование includes
const emails = ["user@gmail.com", "admin@gmail.com", "student@gmail.com"];
const userMail = prompt("Enter your email");

if (emails.includes(userMail)) {
    console.log('Знайшли');
} else {
    console.log('Не знайшли');
}



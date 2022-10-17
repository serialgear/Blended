// ===================================task-01===================================================
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
// В prototype функції-конструктора добав метод getInfo(),
// який виводить в консоль значення полів login і email об'єкта який його викликав.

// function Account(login, email) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function () {
//   console.log(this.login, this.email);
// };

// const acc = new Account("Sara", "sara@mail.com");

// console.log(acc);
// acc.getInfo();

// const showData = {
//   getInfo() {
//     console.log(this.login, this.email);
//   },
// };

// showData.getInfo.call(acc);

// const bmw = {
//   title: "X5",
//   year: 2022,
//   price: 50000,
// };

// const toyota = {
//   title: "Camry",
//   year: 2022,
//   price: 40000,
// };

// const showData = {
//   getInfo() {
//     console.log(this.title, this.year, this.price);
//   },
// };

// showData.getInfo.call(bmw);
// showData.getInfo.call(toyota);

// const germanCars = [
//   {
//     title: "X5",
//     year: 2022,
//     price: 50000,
//   },

//   {
//     title: "S5",
//     year: 2021,
//     price: 60000,
//   },

//   {
//     title: "Astra",
//     year: 2020,
//     price: 30000,
//   },
// ];

// const japaneseCars = {
//   cars: [
//     {
//       title: "Qashqai",
//       year: 2022,
//       price: 50000,
//     },

//     {
//       title: "Camry",
//       year: 2021,
//       price: 60000,
//     },

//     {
//       title: "Outlander",
//       year: 2020,
//       price: 30000,
//     },
//   ],
// };

// const dealership = {
//   showCars(cars) {
//     cars.forEach((car) => console.log(car.title, car.price, car.year));
//   },
// };

// dealership.showCars(japaneseCars.cars);

// ==============================task -02===================================

// // Напиши клас User для створення користувача
// //  з наступними властивостями:
// // name - рядок
// // age - число
// // followers - число
// // Добав метод getInfo(), який, виводить
// // рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `Method User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }

//   getInfo = () => {
//     console.log(
//       `PF User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   };
// }

// const alex = new User("Alex", 25, 1254);

// console.log(alex);
// alex.getInfo();

// ================================task-03========================================
// // Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// // При виклику буде отримувати один аргумент - початковий масив товарів,
// // і записувати його у властивість items.

// // Додай методи класу:

// // getItems() - повертає масив поточних товарів
// // addItem(item) - отримує новий товар і додає його до поточних
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     console.log(this.items);
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   }
// }

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     console.log(this.items);
//   }

//   addItem(item) {
//     this.items = [...this.items, item];
//   }

//   //   removeItem(item) {
//   //     const idx = this.items.indexOf(item);
//   //     this.items.splice(idx, 1);
//   //   }

//   removeItem(item) {
//     this.items = this.items.filter((el) => el !== item);
//   }
// }

// const items = ["apples", "pears", "beer"];
// const store = new Storage(items);

// store.addItem("banana");
// store.removeItem("beer");

// store.getItems();

// ==================================task-05===================================
// // Напиши клас Car із зазначеними властивостями і методами.

//   /*
//    * Додай статичний метод `getSpecs(car)`,
//    * який приймає об'єкт-машину як параметр і виводить
//    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор отримує об'єкт налаштувань.
//    *
//    * Додай властивості майбутнього екземпляра класу:
//    *  speed - поточна швидкість, початкова 0
//    *  price - ціна автомобіля
//    *  maxSpeed - максимальна швидкість
//    *  isOn - заведений автомобіль, значення true або false. Спочатку false
//    *  distance - загальний кілометраж, спочатку 0
//    */

//   /*
//    * Додай геттер і сеттер для властивості price,
//    * який буде працювати з властивістю ціни автомобіля.
//    */

//   /*
//    * Додай код для того, щоб завести автомобіль
//    * Записує у властивість isOn значення true
//    */

//   /*
//    * Додай код для того, щоб заглушити автомобіль
//    * Записує у властивість isOn значення false,
//    * і скидає поточну швидкість в 0
//    */

//   /*
//    * Додає до властивості speed отримане значення,
//    * за умови, що результуюча швидкість
//    * не більше, ніж значення властивості maxSpeed
//    */

//   /*
//    * Забирає від властивості speed отримане значення,
//    * за умови, що результуюча швидкість не менше нуля
//    */

//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */

class Car {
    static getSpecs(car) {
        console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price);
    }

    constructor({
        maxSpeed = 0,
        speed = 0,
        isOn = false,
        distance = 0,
        price = 0,
    }) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this.price = price;
    }

    get carPrice() {
        console.log(this.price);
    }

    set carPrice(newPrice) {
        this.price = newPrice;
    }

    engineStart() {
        this.isOn = true;
    }

    engineStop() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(speedValue) {
        if (this.speed + speedValue <= this.maxSpeed) {
            this.speed += speedValue;
        }
    }

    decelerate(speedValue) {
        if (this.speed - speedValue >= 0) {
            this.speed -= speedValue;
        }
    }

    milage(time) {
        if (this.isOn) {
            this.distance += this.speed * time;
        }
    }
}

const audi = new Car({
    maxSpeed: 250,
    speed: 100,
    isOn: false,
    distance: 500000,
    price: 50000,
});

// Car.getSpecs({
//   maxSpeed: 250,
//   speed: 100,
//   isOn: true,
//   distance: 500,
//   price: 50000,
// });

// audi.carPrice = 60000;
// audi.carPrice;

// audi.engineStart();

// audi.accelerate(150);
// audi.decelerate(100);
// console.log(audi.speed);

// audi.milage(5);
// console.log(audi);

//===================================================task-07===================================================
// // Типів транзацкій всього два.
// // Можна покласти або зняти гроші з рахунку.

// const Transaction = {
//   DEPOSIT: "deposit", //type
//   WITHDRAW: "withdraw",
// };

// // // Кожна транзакція - це об'єкт з властивостями: id, type і amount

// const account = {
//   id: 0,
//   // Поточний баланс рахунку
//   balance: 0,

// //   // Історія транзакцій
//   transactions: [],

//   // Метод створює і повертає об'єкт транзакції. Приймає суму amount і тип type транзакції.

//   //    Метод відповідає за додавання суми до балансу. Приймає суму танзакції.
//   //    Викликає createTransaction для створення об'єкта транзакції після чого додає його в історію транзакцій

//   //    Метод відповідає за зняття суми з балансу. Приймає суму танзакції.
//   //    Викликає createTransaction для створення об'єкта транзакції, після чого додає його в історію транзакцій.

//   //    Якщо amount більше, ніж поточний баланс, виводь повідомлення
//   //    про те, що зняття такої суми не можливо, недостатньо коштів.

//    Метод повертає поточний баланс

//   Метод шукає і повертає об'єкт транзакції по id

//      Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   id: 0,
//   balance: 0,

//   transactions: [],

//   createTransaction(amount, type) {
//     this.id += 1;
//     return { id: this.id, type, amount };
//   },

//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions = [...this.transactions, transaction];
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (this.getBalance() < amount) {
//       console.log(`Не достатньо коштів на рахунку`);
//       return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions = [...this.transactions, transaction];
//     this.balance -= amount;
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     const result = this.transactions.find(
//       (transaction) => transaction.id === id
//     );
//     console.log(result);
//   },

//   getTransactionTotal(type) {
//     const result = this.transactions
//       .filter((transaction) => transaction.type === type)
//       .reduce((total, { amount }) => (total += amount), 0);
//     console.log(result);
//   },
// };

// // console.log(account.createTransaction(2500, Transaction.DEPOSIT));

// account.deposit(101);
// account.deposit(200);
// account.deposit(300);
// account.deposit(400);

// account.withdraw(50);
// account.withdraw(100);
// account.withdraw(200);
// account.withdraw(700);

// // console.log(account);
// console.log(account.getTransactionTotal("deposit"));
// console.log(account.getTransactionTotal("withdraw"));
// // console.log(account.getBalance());

// // console.log(account.getTransactionDetails(4));

// ==============================================task-01==============================================
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// // Напиши скрипт, який, для об'єкта user, послідовно:
// // додає поле mood зі значенням 'happy'

// // замінює значення hobby на 'skydiving'

// // замінює значення premium на false

// // виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// // for (const key of keys) {
// //   console.log(key, user[key]);
// // }
// keys.forEach((key) => {
//   console.log(key, user[key]);
// });

// console.log(user);

// ============================================task-02========================================
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
// Функція повертає число - кількість властивостей.

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
// ==============================================task-03======================================

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт
// співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості
// об'єкта в форматі "ім'я":"кількість задач".

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// function findBestEmployee(employees) {
//   const bestWorker = Math.max(...Object.values(employees));
//   const idx = Object.values(employees).indexOf(bestWorker);
//   const names = Object.keys(employees);
//   return `${names[idx]}: ${bestWorker}`;
// }

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );

// ========================================task-04========================================
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її.
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// function countTotalSalary(employees) {
//   return Object.values(employees).reduce(
//     (total, salary) => (total += salary),
//     0
//   );
// }

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// );

// ==========================================task-5=============================================
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// function getAllPropValues(arr, prop) {
//   return arr.map((product) => product[prop]);
// }

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Ск��нер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "price")); // []

// ===========================================task-06===================================

// // Напиши функцію calculateTotalPrice(allProdcuts, productName),
// // яка отримує масив об'єктів та ім'я продукту (значення властивості name).
// // Повертає загальну вартість продукту (ціна * кількість).

// // Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроїд", price: 400, quantity: 7 },
    { name: "Захоплення", price: 1200, quantity: 2 },
];

// function calculateTotalPrice(allProdcuts, productName) {
//   const item = allProdcuts.find((product) => product.name === productName);
//   console.log(item);
//   return item.price * item.quantity;
// }
// console.log(calculateTotalPrice(products, "Дроїд"));

function TotalPrice(allProdcuts) {
    return allProdcuts.reduce(
        (total, { quantity, price }) => (total += quantity * price),
        0
    );
}

console.log(TotalPrice(products));

class Account {
    constructor(id = 0, balance = 0, transactions = []) {
        this.id = id;
        this.balance = balance;
        this.transactions = transactions;
    }

    createTransaction(amount, type) {
        this.id += 1;
        return { id: this.id, type, amount };
    }

    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions = [...this.transactions, transaction];
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.getBalance() < amount) {
            console.log(`Не достатньо коштів на рахунку`);
            return;
        }
        const transaction = this.createTransaction(
            amount,
            Transaction.WITHDRAW
        );
        this.transactions = [...this.transactions, transaction];
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
    getTransactionDetails(id) {
        const result = this.transactions.find(
            (transaction) => transaction.id === id
        );
        return result;
    }

    getTransactionTotal(type) {
        const result = this.transactions
            .filter((transaction) => transaction.type === type)
            .reduce((total, { amount }) => (total += amount), 0);
        return result;
    }
}

const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

const alex = new Account(0, 1000, []);
// console.log(alex);

alex.deposit(101);
alex.deposit(200);
alex.deposit(300);
alex.deposit(400);

alex.withdraw(50);
alex.withdraw(100);
alex.withdraw(200);
alex.withdraw(700);

// console.log(alex);
// console.log(alex.getTransactionTotal("deposit"));
console.log(alex.getTransactionTotal("withdraw"));
// console.log(alex.getBalance());

// console.log(alex.getTransactionDetails(4));

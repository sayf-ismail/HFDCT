// Parent class
class Account {
  constructor(_id, _name, _balance) {
    console.log("creating an account!");

    this.id = _id;
    this.name = _name;
    this.balance = _balance;
  }

  deposit(n) {
    return (this.balance += n);
  }

  withdraw(n) {
    return (this.balance -= n);
  }

  printBalance() {
    return `${this.name}'s account. Balance: ${this.balance}`;
  }
}

// Child class
class DevAccount extends Account {
  constructor(_id, _name, _balance) {
    super(_id, _name, _balance);
  }

  transferMoney(amount, recipientObject) {
    console.log(
      `${this.name} is transferring RM ${amount} to ${recipientObject.name}!`
    );
    recipientObject.setBalance(amount);
    this.balance -= amount;
    recipientObject.getBalance();
    console.log(
      `SENDER: ${this.name}'s new balance is RM ${this.balance} ____ RECIPIENT: ${recipientObject.name}'s new balance is RM ${recipientObject.balance}!`
    );
  }

  setBalance(amount) {
    this.balance += amount;
    return `SET Account Balance: ${this.balance}`;
  }

  getBalance() {
    return `FOUND Account Balance: ${this.balance}`;
  }
}

// Create instances of accounts

let account1 = new Account(701, "Jeff", 23400);
let devAccount1 = new DevAccount(703, "Dom", 235430);
let devAccount2 = new DevAccount(705, "Balan", 123);

console.log(devAccount1.setBalance(50));
console.log(devAccount1.getBalance());
console.log(devAccount1.transferMoney(50000, devAccount2));

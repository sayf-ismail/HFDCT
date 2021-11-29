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

let firstAccount = new Account(1, "Spartacus", 5000);
let secondAccount = new Account(2, "Hector", 150);
let thirdAccount = new Account(3, "Marcus", 150);

// console.log(firstAccount);
firstAccount.deposit(500);
console.log(firstAccount.printBalance());
// firstAccount.withdraw(5000);

// console.log(firstAccount.printBalance());

// Here I have chosen to store the instances in a Map because:
// 1) The keys can be any primitive type. In this case the Key is the id of the account, which is an integer.
// 2) Elements in this data structure can be ordered.
// 3) Flexibility as there are default methods like has(), values(), delete()
// 4) Highly efficient for search and moderately efficient for insertion
// 5) Records are accessible by unique account number (sometimes called an exact-match query).

const myMap = new Map([
  [firstAccount.id, [firstAccount.name, firstAccount.balance]],
  [secondAccount.id, [secondAccount.name, secondAccount.balance]],
  [thirdAccount.id, [thirdAccount.name, thirdAccount.balance]],
]);

console.log(myMap.entries());

myMap.forEach((val, key) => {
  console.log(`Account number ${key} belongs to ${val[0]}, Bal: RM ${val[1]} `);
});

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Balance after deposit: ${this.balance}`;
    }
    return "invalid deposit amount";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Balance after withdrawal: ${this.balance}`;
    }
    return "insufficient balance";
  }
}

let account = new BankAccount("123456789", 1000);
console.log(account.deposit(100));
console.log(account.withdraw(1100));

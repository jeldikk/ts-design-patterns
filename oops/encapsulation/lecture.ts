// Bank Account
// deposit the money
// withdraw the money
// balance

class BankAccount {
  private _balance: number;
  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter to get balance of bank account
  public get balance() {
    return this._balance;
  }

  public depositMoney(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit Amount");
      return;
    }
    this._balance = this._balance + amount;
  }

  public withdrawMoney(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Withdrawal Amount");
      return;
    }
    const newBalance = this._balance - amount;
    if (newBalance < 0) {
      console.log("Invalid amount in account");
      return;
    }
    this._balance = newBalance;
  }
}

// using the class

const account = new BankAccount(100);
account.depositMoney(20);
console.log({ balance: account.balance });
account.withdrawMoney(200);
console.log({ balance: account.balance });

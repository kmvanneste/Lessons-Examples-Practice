function MiniBank(balance) {
  this.balance = balance;
  this.statement = [this.balance];
  this.getBalance = () => {
    return this.balance;
  },
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  },
  this.setBalance = (value) => {
    this.balance = value;
  },
  this.updateStatement = (value) => {
    this.statement.push[value];
  },
  this.getStatement = () => {
    return [ ...this.statement ];
  },
  this.printStatement = () => {
    
  }
}

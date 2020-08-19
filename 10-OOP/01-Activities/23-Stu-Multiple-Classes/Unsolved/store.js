class Store {
  constructor(name, stock, revenue) {
    this.name = name;
    this.stock = stock;
    this.revenue = revenue;
  }

  processProductSale(productName) {
    this.stock.forEach(toy => {
      
    })
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;

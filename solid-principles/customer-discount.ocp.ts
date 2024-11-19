class OldDiscount {
  giveDiscount(customerType: string) {
    if (customerType === "regular") {
      return 10;
    } else if (customerType === "prime") {
      return 20;
    } else {
      return 0;
    }
  }
}

/**
 * If In future, a new customer comes up
 * we have to modify the  giveDiscount method to extend the functionality for extra type of customer
 * So we have to refactor the whole code to achieve this
 */

interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class PrimeCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

//New diamond Customer has come with 40% discount
class DiamondCustomer implements Customer {
  giveDiscount(): number {
    return 40;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

// using the classes
const regularCustomer = new RegularCustomer();
const primeCustomer = new PrimeCustomer();
const diamondCustomer = new DiamondCustomer();

const discount = new Discount();

console.log(discount.giveDiscount(regularCustomer));
console.log(discount.giveDiscount(primeCustomer));
console.log(discount.giveDiscount(diamondCustomer));

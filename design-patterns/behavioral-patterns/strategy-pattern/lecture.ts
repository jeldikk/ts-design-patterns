/**
 * Behavioral design pattern that lets you define a family of algorithms,
 * put each of them into seperate classes, and make their objects interchangeable.
 * It's a way to change the behavior of an object at runtime without changing its implementation
 */

/**
 * Understanding: We may have different ways of doing a process, for example, payment ( card, cash, UPI, bitcoin)
 * We should able to set the strategy used without knowing what is happen underground
 * The interfaces provided will give some abstraction on working with payment process.
 */

// below interface definition is called as strategy pattern
interface PaymentStrategy {
  pay(amount: number): void;
}

class PaypalStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using Paypal`);
  }
}

class CreditcardStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using credit card`);
  }
}

class BitcoinStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

// below class is called as context in strategy pattern
class ShoppingCart {
  private amount: number = 0;

  constructor(private strategy: PaymentStrategy) {}

  public setPaymentStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public addToCart(amount: number) {
    this.amount = amount;
  }

  public checkout(): void {
    this.strategy.pay(this.amount);
  }
}

// Using the classes

const paypalStrategy = new PaypalStrategy();
const shoppingCart = new ShoppingCart(paypalStrategy);
shoppingCart.addToCart(1000);

shoppingCart.checkout();

const creditCardStrategy = new CreditcardStrategy();
shoppingCart.setPaymentStrategy(creditCardStrategy);
shoppingCart.checkout();

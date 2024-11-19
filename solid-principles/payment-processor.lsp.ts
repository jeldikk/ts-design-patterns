// Payment Processor

// Credit Cards
// Debit Cards
// PayPal

abstract class PaymentProcessor {
  abstract makePayment(amount: number): void;
}

class CreditCard extends PaymentProcessor {
  makePayment(amount: number): void {
    console.log(`Processing Credit Card payment ${amount} dollars`);
  }
}

class DebitCard extends PaymentProcessor {
  makePayment(amount: number): void {
    console.log(`Processing Debit Card Payment - ${amount} dollars`);
  }
}

class PayPal extends PaymentProcessor {
  makePayment(amount: number): void {
    console.log(`Processing PayPal Amount - ${amount} dollars`);
  }
}

function processPayment(processor: PaymentProcessor, amount: number) {
  processor.makePayment(amount);
}

// Using the classes

const creditCard = new CreditCard();
const debitCard = new DebitCard();
const paypal = new PayPal();

processPayment(creditCard, 10);
processPayment(debitCard, 20);
processPayment(paypal, 30);

export {};

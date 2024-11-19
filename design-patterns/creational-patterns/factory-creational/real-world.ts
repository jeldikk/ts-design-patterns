abstract class PaymentProcessor {
  constructor(public amount: number) {}
  public abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Paypal Processor: making a payment of ${this.amount}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Stripe Processor: making payment of ${this.amount}`);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`BankTransfer Processor: making payment of ${this.amount}`);
  }
}

class PaymentProcessorFactory {
  createProcessor(type: "paypal" | "stripe" | "banktransfer", amount: number) {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "banktransfer":
        return new BankTransferProcessor(amount);
      default:
        throw new Error("Invalid Processor type provided");
    }
  }
}

// Using the classes

const paymentProcessor = new PaymentProcessorFactory();

const paypal = paymentProcessor.createProcessor("paypal", 100);
paypal.processPayment();

const stripe = paymentProcessor.createProcessor("stripe", 100);
stripe.processPayment();

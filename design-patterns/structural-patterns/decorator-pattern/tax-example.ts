interface TaxableProduct {
  getCost(): number;
  reportTaxing(): string;
}

class ElectronicProduct implements TaxableProduct {
  constructor(private name: string, private cost: number) {}
  getCost(): number {
    return this.cost;
  }
  reportTaxing() {
    return `${this.name}: ${this.getCost()}`;
  }
}

class TexttileProduct implements TaxableProduct {
  constructor(private name: string, private cost: number) {}
  getCost(): number {
    return this.cost;
  }
  reportTaxing(): string {
    return `${this.name}: ${this.getCost()}`;
  }
}

class FoodProduct implements TaxableProduct {
  constructor(private name: string, private cost: number) {}
  getCost(): number {
    return this.cost;
  }
  reportTaxing(): string {
    return `${this.name}: ${this.getCost()}`;
  }
}

abstract class TaxingDecorator implements TaxableProduct {
  protected abstract taxRate: number;
  constructor(protected product: TaxableProduct) {}
  abstract getCost(): number;
  abstract reportTaxing(): string;
}

class CGSTDecorator extends TaxingDecorator {
  protected taxRate: number = 12;
  getCost(): number {
    return this.product.getCost();
  }
  reportTaxing(): string {
    return `${this.product.reportTaxing()} + ${
      this.getCost() * (this.taxRate / 100)
    }(CGST)`;
  }
}

class SGSTDecorator extends TaxingDecorator {
  protected taxRate: number = 12;
  getCost(): number {
    return this.product.getCost();
  }
  reportTaxing(): string {
    return `${this.product.reportTaxing()} + ${
      this.getCost() * (this.taxRate / 100)
    }(SGST)`;
  }
}

class ServiceTaxDecorator extends TaxingDecorator {
  protected taxRate: number = 5;
  getCost(): number {
    return this.product.getCost();
  }
  reportTaxing(): string {
    return `${this.product.reportTaxing()} + ${
      this.getCost() * (this.taxRate / 100)
    }(Service Tax)`;
  }
}

//Using the classes;

const baseProduct = new ElectronicProduct("Laptop", 25000);
console.log(baseProduct.reportTaxing());

const final = new ServiceTaxDecorator(
  new SGSTDecorator(new CGSTDecorator(baseProduct))
);
console.log(final.reportTaxing());

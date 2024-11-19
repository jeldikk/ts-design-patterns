class Product {
  constructor(private parts: string[] = []) {}

  addPart(part: string): void {
    this.parts.push(part);
  }

  public listParts() {
    console.log(`Product Parts :`, this.parts.join(", "));
  }
}

interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  buildPartC(): void;
}

class ConcreteBuilder implements Builder {
  private product!: Product;
  constructor() {
    this.reset();
  }
  reset(): void {
    this.product = new Product();
  }
  buildPartA(): void {
    this.product.addPart("Part A");
  }
  buildPartB(): void {
    this.product.addPart("Part B");
  }
  buildPartC(): void {
    this.product.addPart("Part C");
  }

  getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;
  setBuilder(builder: Builder) {
    this.builder = builder;
  }
}

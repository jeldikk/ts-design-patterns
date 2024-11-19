/**
 * Product:
 *  id: string
 *  price: number
 *  description: string
 *
 * Book extends Product
 *  author: string
 *  title: string
 *
 * Electronic extends Product
 *  brand: string
 *  model: string
 */

class Product {
  //   public id: string;
  //   public price: number;
  //   public description: string;
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}

  display(): void {
    console.log(
      `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`
    );
  }
}

class Book extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public author: string,
    public title: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(
    id: string,
    price: number,
    description: string,
    public brand: string,
    public title: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Title: ${this.title}`);
  }
}

// Using the classes

const book = new Book(
  "book-1",
  23.4,
  "A Good Book",
  "John Doe",
  "John Doe's book of programming"
);
book.display();
console.log("---------------------------------");
const electronic = new Electronic(
  "electronic-1",
  9999.99,
  "A Good Laptop",
  "Dell",
  "XPS 15"
);
electronic.display();

export {};

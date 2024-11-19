interface FilterStrategy {
  apply(image: string): void;
}

class GrayScaleStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applying Grayscale strategy on ${image}`);
  }
}

class SepiaStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applying SepiaStrategy on ${image}`);
  }
}

class NegativeStrategy implements FilterStrategy {
  apply(image: string) {
    console.log(`Applying Negative Strategy on ${image}`);
  }
}

// by default NegativeStrategy is applied
class ImageProcessor {
  private strategy: FilterStrategy;

  constructor() {
    this.strategy = new NegativeStrategy();
  }

  setFilterStrategy(strategy: FilterStrategy) {
    this.strategy = strategy;
  }

  apply(image: string) {
    this.strategy.apply(image);
  }
}

//client code

const processor = new ImageProcessor();
processor.setFilterStrategy(new GrayScaleStrategy());
processor.apply("filename.jpeg");

processor.setFilterStrategy(new SepiaStrategy());
processor.apply("filename.jpg");

processor.setFilterStrategy(new NegativeStrategy());
processor.apply("filename.jpg");

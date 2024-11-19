// Singleton Logger class
// with a log method
// can also have multiple methods

class Logger {
  private static instance: Logger;
  private constructor() {}
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`Logger: ${message}`);
  }
}

// Using the class

const logger = Logger.getInstance();
logger.log("Hello World");

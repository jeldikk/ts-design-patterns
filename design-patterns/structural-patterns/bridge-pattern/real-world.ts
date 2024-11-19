interface Database {
  connect(): void;
  query(sql: string): void;
  close(): void;
}

class PostgresSQLDatabase implements Database {
  public connect() {
    console.log("Connected to Postgres Database");
  }

  public query(sql: string): void {}

  public close(): void {}
}

class MongoDBDatabase implements Database {
  public connect() {
    console.log("Connected to Mongo Database");
  }

  public query(sql: string): void {}

  public close(): void {}
}

abstract class DatabaseService {
  constructor(protected database: Database) {}

  abstract fetchData(query: string): void;
}

class ClientDatabaseService extends DatabaseService {
  fetchData(query: string): void {
    this.database.connect();
    this.database.query(query);
    console.log(`querying :${query}`);
    this.database.close();
  }
}

// Using the database service
const mongoDb = new MongoDBDatabase();
const mongoDbService = new ClientDatabaseService(mongoDb);
mongoDbService.fetchData("SELECT * FROM Dreams");

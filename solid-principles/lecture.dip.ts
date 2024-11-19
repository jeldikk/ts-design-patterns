// firstly without DIP
class OldMySqlDatabase {
  save(data: string): void {}
}

/**
 * Here below, HighLevelModule is something that is dependent on MySqlDatabase(low level module)
 * So if we decided to use Mongo, we have to completely change the highlevel module
 */
class OLdHighLevelModule {
  constructor(private database: OldMySqlDatabase) {}

  execute(data: string): void {
    this.database.save(data);
  }
}

/**
 * Now lets see how employing DIP will change the code architecture
 */

interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log("saving the data to MySqlDatabase");
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log("Saving the data to MongoDb Database");
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

const mysql: MySqlDatabase = new MySqlDatabase();
const mongo: MongoDbDatabase = new MongoDbDatabase();

const user: HighLevelModule = new HighLevelModule(mysql);
const post: HighLevelModule = new HighLevelModule(mongo);

user.execute("save user data");
post.execute("save post data");

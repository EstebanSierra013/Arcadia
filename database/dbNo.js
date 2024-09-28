import { MongoClient } from "mongodb";
import { DatabaseException } from "../helpers/customExceptions.js";

class DBServerMongo {

  constructor(){
    this.url = `mongodb+srv://${process.env.DB_USER_NO}:${process.env.DB_PASSWORD_NO}@${process.env.DB_HOST_NO}`;
    this.client = new MongoClient(this.url);
  }
  
  static getInstance(){
    if(!DBServerMongo.instance){
      DBServerMongo.instance= new DBServerMongo();
    }
    return DBServerMongo.instance
  }

  async connect(){
    try{
      await this.client.connect();      
      const db = this.client.db(process.env.DB_DATABASE);  
      return db.collection(process.env.DB_COLLECTION);      
    } catch (err) {      
      this.client.close();
      throw new DatabaseException(err.message)
    }
  }
}

let dbArcadiaNo = DBServerMongo.getInstance();
export default dbArcadiaNo;
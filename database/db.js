import mariadb from "mariadb";
import { DatabaseException } from "../helpers/customExceptions.js";

class DBServer {

  constructor(){
    this.db = mariadb.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });
  }
  
  static getInstance(){
    if(!DBServer.instance){
      DBServer.instance= new DBServer();
    }
    return DBServer.instance
  }

  async connect(){
    try{
      this.connection = await this.db.getConnection();
      this.connection.release();
    } catch (err) {      
      this.connection.end();
      throw new DatabaseException(err.message)
    }
  }
  
  async query(query,param=null) {  
    try {      
      return await this.db.execute(query,param);
    } catch (err){
      throw new DatabaseException(err.sqlMessage, err.code)
    }    
  }
}

let dbArcadia = DBServer.getInstance();
export default dbArcadia;
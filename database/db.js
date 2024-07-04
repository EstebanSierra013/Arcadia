import mariadb from "mariadb";

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
      console.log(err);
      this.connection.end();
    }
  }
  
  async query(query,param=null) {  
    let res = null;  
    try {      
      res = this.db.execute(query,param);
      this.connection.release();
    } catch (err){
      console.log(err);
      this.connection.end();
    }    
    return res;
  }
}

let dbArcadia = DBServer.getInstance();
export default dbArcadia;
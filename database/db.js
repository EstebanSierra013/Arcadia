import mariadb from "mariadb";

const dbConnector = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

export class DBConnector {
  static async query(query,param=null) {  
    console.log(query,param);
    var res = null;  
    try {
      var connection = await dbConnector.getConnection();
      res = connection.execute(query,param);
      connection.end;
    } catch (error){
      console.log(err);
    }    
    return res;
  }
}

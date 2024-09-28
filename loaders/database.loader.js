import dbArcadia from "../database/db.js";
import dbArcadiaNo from "../database/dbNo.js";

export class DatabaseLouder {
  static init(){
    dbArcadia.connect();   
  }
}
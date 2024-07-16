import dbArcadia from "../database/db.js";

export class DatabaseLouder {
  static init(){
    dbArcadia.connect();
  }
}
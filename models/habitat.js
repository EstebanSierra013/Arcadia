import { DBConnector } from "../database/db.js";

export class HabitatModel {
  static async getAll(){
    const habitats = await DBConnector.query('SELECT * FROM habitat;');
    return habitats;
  }
}
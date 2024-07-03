import { DBConnector } from "../database/db.js";

export class AnimalModel {
  static async getAll(){
    const animals = await DBConnector.query('SELECT * FROM animal;');
    return animals;
  }
}
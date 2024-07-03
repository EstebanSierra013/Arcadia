import { AnimalModel } from "../models/animal.js";

export class AnimalController {
  static async getAll (req, res){
    const animals = await AnimalModel .getAll();
    res.json(animals);    
  }
}
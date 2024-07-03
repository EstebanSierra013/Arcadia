import { HabitatModel } from "../models/habitat.js"

export class HabitatController {
  static async getAll (req, res){
    const habitats = await HabitatModel.getAll();
    res.json(habitats);    
  }
}
import { ServiceModel } from "../models/service.js";

export class ServiceController {
  static async getAll (req, res){
    const services = await ServiceModel.getAll();
    res.json(services);    
  }
}
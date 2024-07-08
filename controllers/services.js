import { ServiceModel } from "../models/service.js";

export class ServiceController {
  static async getAll(req, res) {
    const services = await ServiceModel.getAll();
    res.json(services);
  }

  static async create(req, res) {
    const input = req.body;
    try{
      const {result} = await ServiceModel.create({ input });
      console.log(result)
      return res.status(201).json({ message: "Service created", service_id});
    }catch(err){
      return res.status(404).json({... err})
    }    
  }

  static async delete(req, res) {
    const input = req.body;
    const { id } = req.params;
    const result = await ServiceModel.delete({ id, input });
    console.log(result);
    if (result === false) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.json({ message: "Service deleted" });
  }
}

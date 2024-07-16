import { NotFoundException, UpdateFailedException } from "../helpers/customExceptions.js";
import { ImageModel } from "../models/image.js";
import { ServiceModel } from "../models/service.js";

export class ServiceController {
  static async getAll(req, res) {
    try{
      const services = await ServiceModel.getAll();
      if(!services.length) {
        throw new NotFoundException("Service not found");
      }
      res.status(201).json({ services });
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async create(req, res) {
    const input = req.body;
    try{
      const {service_id} = await ServiceModel.create({ input });
      res.status(201).json({ message: "Service created, Id: " + service_id});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async update(req, res) {
    const input = req.body;
    const { id } = req.params;
    try{
      const { affectedRows }  = await ServiceModel.update({ input, service_id: id });
      if (!affectedRows) throw new UpdateFailedException("Service update failed");
      res.status(201).json({ message: "Service update"});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async delete(req, res) {
    const { ids } = req.params
    const [service_id, image_id]  = ids.split('_');
    try{
      const result = await ServiceModel.delete({ service_id });   
      if (result === false) {
        throw new NotFoundException("Service not found");
      }
      await ImageModel.delete({ id: image_id });
      res.status(201).json({ message: "Service deleted" });
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}

import { HabitatModel } from "../models/habitat.js";
import { NotFoundException } from "../helpers/customExceptions.js";
import { ImageModel } from "../models/image.js";

export class HabitatController {
  static async getAll(req, res) {
    try{
      const habitats = await HabitatModel.getAll();
      if(!habitats.length) {
        throw new NotFoundException("Habitat not found");
      }
      res.status(201).json({ habitats });
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async create(req, res) {
    const input = req.body;
    try{
      const {habitat_id} = await HabitatModel.create({ input });
      res.status(201).json({ message: "Habitat created, Id: " + habitat_id});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async update(req, res) {
    const input = req.body;
    const { id } = req.params;
    try{
      const { affectedRows }  = await HabitatModel.update({ ...input, habitat_id: id });
      if (!affectedRows) throw new UpdateFailedException("Habitat update failed");
      res.status(201).json({ message: "Habitat update"});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async delete(req, res) {
    const { ids } = req.params
    const [habitat_id, image_id]  = ids.split('_');
    try{
      const result = await HabitatModel.delete({ habitat_id });   
      console.log(result)
      if (result === false) {
        throw new NotFoundException("Habitat not found");
      }
      await ImageModel.delete({ id: image_id });
      res.status(201).json({ message: "Habitat deleted" });
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}

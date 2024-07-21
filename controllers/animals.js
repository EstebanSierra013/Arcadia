import { NotFoundException, UpdateFailedException } from "../helpers/customExceptions.js";
import { AnimalModel } from "../models/animal.js";
import { ImageModel } from "../models/image.js";
import { enumFunctionbyRol } from "../helpers/enumRols.js";

export class AnimalController {
  static async getAll(req, res) {
    try{
      const animals = await AnimalModel.getAll();
      if(!animals.length) {
        throw new NotFoundException("Animal not found");
      }
      const details= {
        name: "Animals",
        en_name: "animals",
        url: req.originalUrl,
        rol: req.session.user.rol
      }
      const functions = enumFunctionbyRol[req.session.user.rol];
      res.status(201).render("pages/gestion", { objets: animals, details, functions})
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async getAllByHabitat(req, res, next) {
    const { id } = req.params
    try{
      const animals = await AnimalModel.getAllByHabitat({ habitat_id: id });
      if(!animals.length) {
        throw new NotFoundException("Animal not found in this habitat");
      }
      req.params.animals = animals;
      next()
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async create(req, res) {
    const input = req.body;
    try{
      const {animal_id} = await AnimalModel.create({ input });
      res.status(201).json({ message: "Animal created, Id: " + animal_id});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async update(req, res) {
    const input = req.body;
    const { id } = req.params;
    try{
      const { affectedRows }  = await AnimalModel.update({ input, animal_id: id });
      if (!affectedRows) throw new UpdateFailedException("Animal update failed");
      res.status(201).json({ message: "Animal update"});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async delete(req, res) {
    const { ids } = req.params
    const [animal_id, image_id]  = ids.split('_');
    try{
      const result = await AnimalModel.delete({ animal_id });
      if (result === false) {
        throw new NotFoundException("Animal not found");
      }
      await ImageModel.delete({ id: image_id });
      res.status(201).json({ message: "Animal deleted" });
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}
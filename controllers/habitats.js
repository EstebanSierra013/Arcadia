import { HabitatModel } from "../models/habitat.js";
import { UpdateFailedException, NotFoundException } from "../helpers/customExceptions.js";
import { ImageModel } from "../models/image.js";
import { enumFunctionbyRol } from "../helpers/enumRols.js";

export class HabitatController {
  static async getAll(req, res) {
    try{
      const habitats = await HabitatModel.getAll();
      if(!habitats.length) {
        throw new NotFoundException("Habitat not found");
      }
      const details= {
        name: "Habitats",
        en_name: "habitats",
        url: req.originalUrl,
        rol: req.session.user.rol
      }

      let isLogged = false;
      
      if(req.session.user){
        isLogged = true;
      }
      const functions = enumFunctionbyRol[req.session.user.rol];
      res.status(201).render("pages/gestion", { objets: habitats, details, functions, isLogged})
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async renderHabitat(req, res) {
    try{
      const habitats = await HabitatModel.getAll();
      if(!habitats.length) {
        throw new NotFoundException("Habitat not found");
      }

      let isLogged = false;
      
      if(req.session.user){
        isLogged = true;
      }

      res.render("pages/habitats", { habitats, isLogged })
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;
    try{
      const habitat = await HabitatModel.getOne({habitat_id: id});
      if(!habitat.length) {
        throw new NotFoundException("Habitat not found");
      }
      res.status(201).json({ objet: habitat})
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async renderOneHabitat(req, res) {
    const { id, animals } = req.params;
    try{
      const habitat = await HabitatModel.getOne({habitat_id: id});
      if(!habitat.length) {
        throw new NotFoundException("Habitat not found");
      }
      let isLogged = false;
      
      if(req.session.user){
        isLogged = true;
      }
      res.status(201).render("pages/animals",{ objet: habitat[0], animals, isLogged})
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
      const { affectedRows }  = await HabitatModel.update({ input, habitat_id: id });
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

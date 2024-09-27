import { NotFoundException, UpdateFailedException } from "../helpers/customExceptions.js";
import { ImageModel } from "../models/image.js";
import { ServiceModel } from "../models/service.js";
import { enumFunctionbyRol } from "../helpers/enumRols.js";

export class ServiceController {
  static async getAll(req, res) {
    try{
      const services = await ServiceModel.getAll();
      if(!services.length) {
        throw new NotFoundException("Service not found");
      }
      const details= {
        name: "Services",
        en_name: "services",
        url: req.originalUrl,
        rol: req.session.service.rol
      }
      const functions = enumFunctionbyRol[req.session.service.rol];
      let isLogged = false;

      if(req.session.service){
        isLogged = true;
      }
      
      res.status(201).render("pages/gestion", { objets: services, details, functions, isLogged})
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async getOne(req, res) {
    const { id } = req.params
    try{
      const service = await ServiceModel.getOne( { service_id : id } );
      if(!service.length) {
        throw new NotFoundException("Service not found");
      }
      res.status(201).json({ objet: service })
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async renderService(req, res) {
    try{
      const services = await ServiceModel.getAll();
      if(!services.length) {
        throw new NotFoundException("Service not found");
      }
      let isLogged = false;

      if(req.session.service){
        isLogged = true;
      }
      
      res.render("pages/services", { services, isLogged })
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

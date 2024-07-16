import { NotFoundException } from "../helpers/customExceptions.js";
import { ServiceModel } from "../models/service.js";
import { ReviewModel } from "../models/review.js";


export class IndexController {
  static async getAll(req, res) {
    try{
      const services = await ServiceModel.getAll();
      let reviews = {}
      
      if(req.query.isVisible == 'true'){
        const { isVisible } = req.query;
        reviews = await ReviewModel.getAll( isVisible ? { isVisible }  : {});
      }     

      if(!services.length) {
        throw new NotFoundException("Service not found");
      }

      res.status(201).json({ services, reviews });
    } catch (err){
      res.status(404).json({... err})
    }
  }
  
  static async getHabitats(req, res) {

  }

  static async createContact(req, res) {
    
  }

}

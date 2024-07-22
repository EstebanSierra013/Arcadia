import { NotFoundException } from "../helpers/customExceptions.js";
import { ServiceModel } from "../models/service.js";
import { ReviewModel } from "../models/review.js";
import { AnimalModel } from "../models/animal.js";
import { HabitatModel} from "../models/habitat.js";

export class IndexController {
  static async getAll(req, res) {
    try{
      const services = await ServiceModel.getAll();
      const animals = await AnimalModel.getAll();
      const habitats = await HabitatModel.getAll();
      const reviews = await ReviewModel.getAll({ isVisible: true });
      if(!services.length) {
        throw new NotFoundException("Service not found");
      }
      let isLogged = false;

      if(req.session){
        isLogged = true;
      }

      res.render('pages/index', { services, habitats, animals, reviews, isLogged });
      //res.status(201).json({ services, reviews });
    } catch (err){
      res.status(404).json({... err})
    }
  }
}

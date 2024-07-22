import { UserModel } from "../models/user.js";
import { enumFunctionbyRol, enumPathbyRol } from "../helpers/enumRols.js";
import { ServiceModel } from "../models/service.js";
import { ReviewModel } from "../models/review.js";
import { ReportModel } from "../models/reports.js";
import { HabitatModel } from "../models/habitat.js";
import { AnimalModel } from "../models/animal.js";

export class ProfileController {
  static async getProfile (req, res){
    try{
      const { username, rol } = req.session.user
      const [ user ]  = await UserModel.getOne({ username }) 
      user.en_rol = rol;
      user.url = req.originalUrl;
      const paths = enumPathbyRol[rol];
      let isLogged = false;

      if(req.session.user){
        isLogged = true;
      }
      res.render("pages/profile", { user , paths, isLogged}); 
    } catch (err){
      console.log(err)
      res.status(404).json({... err})
    }
  }
}
import { UserModel } from "../models/user.js";
import { enumPathbyRol } from "../helpers/enumRols.js";
import { CountModel } from "../models/count.js";
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
      
      let rankAnimal = [];
      if(rol == 'admin'){        
        const rank = await CountModel.rankAll();
        if(!rank.length) {
          throw new NotFoundException("Rank null");
        }
        for(let i = 0; i < rank.slice(0,3).length ;i++){
          const name = rank[i].name 
          const animal = await AnimalModel.getOneByName({ name });
          rankAnimal.push(animal[0]);
        }
      }      
      res.render("pages/profile", { user , paths, rankAnimal, isLogged}); 
    } catch (err){
      console.log(err)
      res.status(404).json({... err})
    }
  }
}
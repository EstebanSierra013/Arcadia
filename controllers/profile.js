import { UserModel } from "../models/user.js";
import { enumRols } from "../helpers/enumRols.js";

export class ProfileController {
  static async getProfile (req, res){
    try{
      const { username } = req.session.user
      const [ user ]  = await UserModel.getOne({ username })
      res.render("pages/profile", { user });
    } catch (err){
      res.status(404).json({... err})
    }
  }
}
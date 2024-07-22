import { NotFoundException} from "../helpers/customExceptions.js";
import { UserModel } from "../models/user.js";
import { enumRols } from "../helpers/enumRols.js";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AutheticationController {

  static async renderLogin(req, res) {
    try{
      res.render("pages/login");
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async  login(req, res) {
    const {username, password} = req.body;
    
    try{
      const user  = await UserModel.getOne({ username });
      if(!user.length) throw new NotFoundException("Username and/or password are incorrects");

      const isValid = await bcrypt.compare(password, user[0].password)

      if(!isValid) throw new NotFoundException("Username and/or password are incorrects");
      
      const rol = enumRols[user[0].Role];
      const token = jwt.sign(
        {username: user[0].Username, rol},
        process.env.SECRET_JWT_KEY,
        {
          expiresIn: "1h"
        })
      res.status(301)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60
      })
      .redirect('/profile/' + rol);     
      
    } catch (err){
      res.status(404).json({... err})
    }
  }
  static async logout(req, res) {
    res.clearCookie('access_token').json({ message: "Logout" });
  }
}

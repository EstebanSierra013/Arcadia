import { NotFoundException, UpdateFailedException } from "../helpers/customExceptions.js";
import { enumFunctionbyRol } from "../helpers/enumRols.js";
import { RolerModel } from "../models/roles.js";
import { UserModel } from "../models/user.js";
import bcrypt from 'bcryptjs';

export class UserController {
  static async getAll(req, res) {
    try{
      const users = await UserModel.getAll();
      const roles = await RolerModel.getAll();
      if(!users.length) {
        throw new NotFoundException("User not found");
      }
      const details= {
        name: "Utilisateurs",
        en_name: "users",
        url: req.originalUrl,
        rol: req.session.user.rol,   
        table: roles     
      }
      const functions = enumFunctionbyRol[req.session.user.rol];
      let isLogged = false;

      if(req.session.user){

        isLogged = true;
      }

      res.status(201).render("pages/gestion", { objets: users, details, functions, isLogged})
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async getOne(req, res) {
    const { id } = req.params
    try{
      const user = await UserModel.getOne( { username : id } );
      if(!user.length) {
        throw new NotFoundException("User not found");
      }
      delete user[0].password;
      res.status(201).json({ objet: user })
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async create(req, res) {
    const input = req.body;
    const hashedPassword = await bcrypt.hash(input.password,parseInt(process.env.SALT_ROUNDS));
    input.password = hashedPassword
    try{
      await UserModel.create({ input });
      res.status(201).json({ message: "User created"});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async update(req, res) {
    const input = req.body;
    const { id } = req.params;
    try{
      const { affectedRows }  = await UserModel.update({ input, username: id });
      if (!affectedRows) throw new UpdateFailedException("User update failed");
      res.status(201).json({ message: "User update"});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async delete(req, res) {
    const { username } = req.params
    try{
      const result = await UserModel.delete({ username });
      if (result === false) {
        throw new NotFoundException("User not found");
      }
      res.status(201).json({ message: "User deleted" });
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}
import dbArcadiaNo from "../database/dbNo.js";
import { NotFoundException, UpdateFailedException } from "../helpers/customExceptions.js";
import { enumFunctionbyRol } from "../helpers/enumRols.js";

export class CountController {
  static async getAll(req, res) {
    try{
      const collection = await dbArcadiaNo.connect();
      const clicks = collection.find();
      res.status(201).json( { clicks })
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async save(req, res) {
    const click = {clickTime: new Date()};
    try{
      const collection = await dbArcadiaNo.connect();
      const result = await collection.insertOne(click)
      res.status(201).json({message: result})
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}
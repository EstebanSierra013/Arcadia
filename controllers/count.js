import { NotFoundException, UpdateFailedException } from "../helpers/customExceptions.js";
import { CountModel } from "../models/count.js";

export class CountController {
  static async sortAll(req, res) {
    try{
      const rank = await CountModel.sortAll();
      if(!rank.length) {
        throw new NotFoundException("Rank null");
      }
      res.status(201).json({ rank })
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async save(req, res) {
    const { animal } = req.params;
    try{
      const {result} = CountModel.save( animal )
      res.status(201).json({ message: "Click saved: " + result});
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}
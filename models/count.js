import dbArcadiaNo from "../database/dbNo.js";
import { AnimalModel } from "../models/animal.js";

export class CountModel {

  static async rankAll(){
    try{
      const db = await dbArcadiaNo.connect();
      const collections = await db.listCollections().toArray();
      let rank = [];
      for (const collection of collections) {
        const { name } = collection;
        const clicks = await db.collection(name).count();
        const animal = { name: name, clicks};
        rank.push(animal);
      };
      rank.sort((a,b) => b.clicks - a.clicks);
      return rank;
    } catch (err){
      throw err;
    }
  }

  static async save( animal ){
    try{
      const click = {clickTime: new Date()};
      const db = await dbArcadiaNo.connect();
      const { result }= await db.collection(animal).insertOne(click);
      return ({click: result})
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}
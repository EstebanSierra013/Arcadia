import dbArcadia from "../database/db.js";

export class RolerModel {
  static async getAll(){
    try{
      const roles = await dbArcadia.query(`
        SELECT * FROM rol WHERE rol_name != "Administrateur";`);
      return roles;
    }catch(err){
      throw err;
    }
  }
}
import dbArcadia from "../database/db.js";

export class RolModel {
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
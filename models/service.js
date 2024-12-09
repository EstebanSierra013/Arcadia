import dbArcadia from "../database/db.js";
import { formatColumnSetSQL } from "../helpers/commonUtils.js";

export class ServiceModel {
  static async getAll(){
    try{
      const services = await dbArcadia.query(`SELECT 
        S.service_id as Id, S.name as Nom, S.description as Description, S.schedule as Horaire, S.duration as Duration, 
        I.image_path as Image FROM service S LEFT JOIN image I  ON S.image_id = I.image_id;`);
      return services;
    }catch(err){
      throw err;
    }
  }
  
  static async getOne({ service_id }){
    try{
      const service = await dbArcadia.query(`SELECT 
        S.service_id as Id, S.name as Nom, S.description as Description, S.schedule as Horaire, S.duration as Duration, 
        I.image_path as Image FROM service S LEFT JOIN image I  ON S.image_id = I.image_id
        WHERE S.service_id = ?;`,
        [service_id]
      );
      return service;
    }catch(err){
      throw err;
    }
  }

  static async create({ input }){
    const { name, description, schedule, duration, image_id } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO service ( name, description, schedule, duration, image_id ) VALUES (?, ?, ?, ?, ?);',
        [name, description, schedule, duration, image_id]
      )
      return ({service_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async update( { input, service_id } ){
    const { columnsSet, values } = formatColumnSetSQL(input);
    try {
      const result = await dbArcadia.query(
        `UPDATE service SET ${columnsSet} WHERE service_id = ?;`,
        [... values, service_id]
      )
      return result;   
    } catch (err) {     
      throw err;
    }
  }

  static async delete({ service_id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM service WHERE service_id = ?;',
        [service_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (err) {
      err.cause = 'Error deleting service: ' + err.cause 
      throw err
    }
  }
}
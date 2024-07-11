import dbArcadia from "../database/db.js";

export class ServiceModel {
  static async getAll(){
    try{
      const services = await dbArcadia.query(`SELECT 
        S.*, I.image_path FROM service S LEFT JOIN image I  ON S.image_id = I.image_id;`);
      return services;
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

  static async update( input ){
    const { name, description, schedule, duration, image_id, service_id} = input
    try {
      const result = await dbArcadia.query(
        `UPDATE service SET name = ?, description = ?, schedule = ?, duration = ?, image_id = ? 
        WHERE service_id = ?;`,
        [name, description, schedule, duration, image_id, service_id]
      )
      return result;   
    } catch (err) {     
      throw err
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
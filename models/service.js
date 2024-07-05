import dbArcadia from "../database/db.js";

export class ServiceModel {
  static async getAll(){
    const services = await dbArcadia.query('SELECT * FROM service;');
    return services;
  }

  static async create({ input }){
    const { name, description, schedule, duration, image_id } = input;
    try {
      await dbArcadia.query(
        'INSERT INTO service ( name, description, schedule, duration, image_id ) VALUES (?, ?, ?, ?, ?);',
        [name, description, schedule, duration, parseInt(image_id,10)]
      )
    } catch (e) {
      console.log(e)
      throw new Error('Error creating service')
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM service WHERE service_id = ?;',
        [id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating service')
    }
  }
}
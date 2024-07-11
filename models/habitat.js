import dbArcadia from "../database/db.js";

export class HabitatModel {
  static async getAll(){
    try{
      const services = await dbArcadia.query(`SELECT 
        H.*, I.image_path FROM habitat H LEFT JOIN image I  ON H.image_id = I.image_id;`);
      return services;
    }catch(err){
      throw err;
    }
  }
 
  static async create({ input }){
    const { name, description, habitat_comment, image_id } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO habitat ( name, description, habitat_comment, image_id ) VALUES (?, ?, ?, ?);',
        [name, description, habitat_comment, image_id]
      )
      return ({habitat_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async update( input ){
    const { name, description, habitat_comment, image_id, habitat_id } = input
    try {
      const result = await dbArcadia.query(
        `UPDATE habitat SET name = ?, description = ?, habitat_comment = ?, image_id = ? 
        WHERE habitat_id = ?;`,
        [name, description, habitat_comment, image_id, habitat_id]
      )
      return result;   
    } catch (err) {     
      console.log(err);
      throw err;
    }
  }

  static async delete({ habitat_id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM habitat WHERE habitat_id = ?;',
        [habitat_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating habitat')
    }
  }
}
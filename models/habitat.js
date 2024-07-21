import dbArcadia from "../database/db.js";
import { formatColumnSetSQL } from "../helpers/commonUtils.js";

export class HabitatModel {
  static async getAll(){
    try{
      const habitat = await dbArcadia.query(
        `SELECT H.habitat_id as Id, H.description as Description, H.habitat_comment as Commentaire, I.image_path as Image FROM habitat H LEFT JOIN image I  ON H.image_id = I.image_id;`);
      return habitat;
    }catch(err){
      throw err;
    }
  }

  static async getOne({ habitat_id }){
    try{
      const habitat = await dbArcadia.query(
        `SELECT H.*, I.image_path FROM habitat H LEFT JOIN image I  ON H.image_id = I.image_id
        WHERE H.habitat_id = ?;`,
        [habitat_id]
      );
      return habitat;
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

  static async update( { input, habitat_id} ){
    const { columnsSet, values } = formatColumnSetSQL(input);
    try {
      const result = await dbArcadia.query(
        `UPDATE habitat SET ${columnsSet} WHERE habitat_id = ?;`,
        [... values, habitat_id]
      )
      return result;   
    } catch (err) {     
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
      throw new Error('Error creating habitat')
    }
  }
}
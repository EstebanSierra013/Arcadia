import dbArcadia from "../database/db.js";
import { NotFoundException } from "../helpers/customExceptions.js";

export class ImageModel {

  static async findOne({ image_path }){
    try {
      const result = await dbArcadia.query(
        'SELECT * FROM image WHERE image_path = ?;',
        [image_path]
      )
      return result.length ? {image_id: result[0].image_id, isFound: true} : {isFound: false};
    } catch (err) {     
      throw err
    }
  }

  static async create({ input }){
    const { image_path } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO image( image_path ) VALUES (?);',
        [image_path]
      )
      return ({image_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM image WHERE image_id = ?;',  
        [id]
      )
      if(!affectedRows) throw new NotFoundException("Image not found");
      
    } catch (err) {
      err.cause = 'Error deleting image: ' + err.cause 
      throw err
    }
  }
}
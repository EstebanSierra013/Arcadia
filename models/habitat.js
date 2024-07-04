import { DBConnector } from "../database/db.js";

export class HabitatModel {
  static async getAll(){
    const habitats = await DBConnector.query('SELECT * FROM habitat;');
    return habitats;
  }

  static async create({ input }){
    const { name, description, habitat_comment, image_id } = input;
    console.log(typeof(image_id))
    try {
      await DBConnector.query(
        'INSERT INTO habitat ( name, description, habitat_comment, image_id ) VALUES (?, ?, ?, ?);',
        [name, description, habitat_comment, parseInt(image_id,10)]
      )
    } catch (e) {
      console.log(e)
      throw new Error('Error creating habitat')
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await DBConnector.query(
        'DELETE FROM habitat WHERE habitat_id = ?;',
        [id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating habitat')
    }
  }
}
import dbArcadia from "../database/db.js";

export class HabitatModel {
  static async getAll(){
    const habitats = await dbArcadia.query('SELECT * FROM habitat;');
    return habitats;
  }

  static async create({ input }){
    const { name, description, habitat_comment, image_id } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO habitat ( name, description, habitat_comment, image_id ) VALUES (?, ?, ?, ?);',
        [name, description, habitat_comment, image_id]
      )
    } catch (err) {   
      console.log(err)
      throw err
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await dbArcadia.query(
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
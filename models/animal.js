import { DBConnector } from "../database/db.js";

export class AnimalModel {
  static async getAll(){
    const animals = await DBConnector.query('SELECT * FROM animal;');
    return animals;
  }

  static async create({ input }){
    const { name, species, habitat_id, image_id } = input;
    console.log(typeof(image_id))
    try {
      await DBConnector.query(
        'INSERT INTO animal ( name, species, habitat_id, image_id ) VALUES (?, ?, ?, ?);',
        [name, species, parseInt(habitat_id,10), parseInt(image_id,10)]
      )
    } catch (e) {
      console.log(e)
      throw new Error('Error creating animal')
    }
  }

  static async update({ id , input}){
    const { species, habitat_id, image_id } = input;
    try {
      await DBConnector.query(
        'UPDATE animal SET ? = ? WHERE id = ?;',
        [species, habitat_id, id]
      )
    } catch (e) {
      console.log(e)
      throw new Error('Error creating animal')
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await DBConnector.query(
        'DELETE FROM animal WHERE animal_id = ?;',
        [id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating animal')
    }
  }
}
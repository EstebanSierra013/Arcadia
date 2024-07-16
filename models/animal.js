import dbArcadia from "../database/db.js";
import { formatColumnSetSQL } from "../helpers/commonUtils.js"

export class AnimalModel {
  static async getAll(){
    try{
      const animals = await dbArcadia.query(`SELECT 
        A.*, I.image_path FROM animal A LEFT JOIN image I  ON A.image_id = I.image_id;`);
      return animals;
    }catch(err){
      throw err;
    }
  }

  static async getAllByHabitat({ habitat_id }){
    try{
      const animals = await dbArcadia.query(
        `SELECT 
        A.name, A.species, A.status, I.image_path FROM animal A LEFT JOIN image I  ON A.image_id = I.image_id
        WHERE A.habitat_id = ?;`,
        [habitat_id]
      );
      return animals;
    }catch(err){
      throw err;
    }
  }

  static async create({ input }){
    const { name, species, habitat_id, image_id } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO animal ( name, species, habitat_id, image_id ) VALUES (?, ?, ?, ?);',
        [name, species, habitat_id, image_id]
      )
      return ({animal_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async update( { input, animal_id } ){
    const { columnsSet, values } = formatColumnSetSQL(input);
    try {
      const result = await dbArcadia.query(
        `UPDATE animal SET ${columnsSet} WHERE animal_id = ?;`,
        [... values, animal_id]
      )
      return result;   
    } catch (err) {     
      throw err;
    }
  }

  static async delete({ animal_id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM animal WHERE animal_id = ?;',
        [animal_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      throw new Error('Error creating animal')
    }
  }
}
import dbArcadia from "../database/db.js";
import { formatColumnSetSQL } from "../helpers/commonUtils.js";

export class UserModel {
  static async getAll(){
    try{
      const users = await dbArcadia.query(`SELECT 
        U.*, R.rol_name FROM user U LEFT JOIN rol R ON U.rol_id = R.rol_id;`);
      return users;
    }catch(err){
      throw err;
    }
  }

  static async getOne({ username }){
    try{
      const user = await dbArcadia.query(`SELECT 
        U.*, R.rol_name FROM user U LEFT JOIN rol R ON U.rol_id = R.rol_id
        WHERE U.username = ?;`,
        [username]
      );
      return user;
    }catch(err){
      throw err;
    }
  }

  static async create({ input }){
    const { username, password, name, lastname, rol_id } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO user ( username, password, name, lastname, rol_id ) VALUES (?, ?, ?, ?, ?);',
        [username, password, name, lastname, rol_id]
      )
      return ({user_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async update( {input, id} ){
    const { columnsSet, values } = formatColumnSetSQL(input);
    try {
      const result = await dbArcadia.query(
        `UPDATE user SET ${columnsSet} WHERE username = ?;`,
        [...values, id]
      )
      return result;   
    } catch (err) {     
      throw err;
    }
  }

  static async delete({ username}){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM user WHERE username = ?;',
        [username]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      throw new Error('Error creating user')
    }
  }
}
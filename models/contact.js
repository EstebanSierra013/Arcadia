import dbArcadia from "../database/db.js";

export class ContactModel {

  static async getAll(params = {}){
    try{            
      const sql_filter = Object.keys(params).length ? `WHERE isReplied = ${params.isReplied}` :  "";
      const contacts = await dbArcadia.query(
        `SELECT C.contact_id as Id, C.mail as Email, C.title as Titre, C.description as Description, C.isReplied FROM contact as C ${sql_filter} ORDER BY isReplied, contact_id DESC;`);
      return contacts;
    }catch(err){
      throw err;
    }
  }

  static async create({ input }){
    const { mail, title, description } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO contact (mail, title, description) VALUES (?, ?, ?);',
        [mail, title, description]
      )
      return ({contact_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async replyContact( { contact_id } ){
    try {
      const result = await dbArcadia.query(
        `UPDATE contact SET isReplied = true WHERE contact_id = ?;`,
        [contact_id]
      )
      return result;   
    } catch (err) {     
      throw err
    }
  }

  static async delete({ contact_id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM contact WHERE contact_id = ?;',
        [contact_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (err) {
      err.cause = 'Error deleting contact: ' + err.cause 
      throw err
    }
  }
}
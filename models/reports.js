import dbArcadia from "../database/db.js";

export class ReportModel {

  static async create({ input }){
    const { date, food, quantity, created_by, animal_id, role} = input;
    try {
      const sql_filter = role ? `WHERE isReplied = ${params.isReplied}` :  "";
      const result = await dbArcadia.query(
        `INSERT INTO ${role}_report ( date, food, quantity, created_by, animal_id ) VALUES (?, ?, ?, ?);`,
        [date, food, quantity, created_by, animal_id]
      )
      return ({report_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }
  /*
  static async delete({ animal_id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        `DELETE FROM ${} WHERE ${}_report_id = ?;`,
        [animal_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating animal')
    }
  }
  */
}
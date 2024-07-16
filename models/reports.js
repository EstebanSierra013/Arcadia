import dbArcadia from "../database/db.js";
import { formatColumnSetSQL } from "../helpers/commonUtils.js";

export class ReportModel {

  static async getAllByRol({ rol }){
    try{
      const reports = await dbArcadia.query(
        `SELECT * FROM ${rol}_report ORDER BY ${rol}_report_id DESC;`);
      return reports;
    }catch(err){
      throw err;
    }
  }

  static async getAll(){
    try{
      const v_reports = await dbArcadia.query(
        `SELECT * FROM employee_report ORDER BY employee_report_id DESC;`);
      const e_reports = await dbArcadia.query(
        `SELECT * FROM veterinary_report ORDER BY veterinary_report_id DESC;`);
      return {v_reports, e_reports};
    }catch(err){
      throw err;
    }
  }

  static async create( input ){
    const { date, food, quantity, created_by, animal_id, rol } = input;
    try {
      const result = await dbArcadia.query(
        `INSERT INTO ${rol}_report ( date, food, quantity, created_by, animal_id ) VALUES (?, ?, ?, ?, ?);`,
        [date, food, quantity, created_by, animal_id]
      )
      return ({report_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async update( { input, report_id } ){
    const { columnsSet, values } = formatColumnSetSQL(input);
    try {
      const result = await dbArcadia.query(
        `UPDATE ${rol}_report SET ${columnsSet} WHERE animal_id = ?;`,
        [... values,report_id]
      )
      return result;   
    } catch (err) {     
      throw err;
    }
  }
  
  static async delete( input ){
    console.log(input)
    try {
      const { affectedRows } = await dbArcadia.query(
        `DELETE FROM ${input.rol}_report WHERE ${input.rol}_report_id = ?;`,
        [input.report_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error deleting report')
    }
  }
}
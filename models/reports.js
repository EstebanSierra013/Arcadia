import dbArcadia from "../database/db.js";
import { formatColumnSetSQL } from "../helpers/commonUtils.js";

export class ReportModel {

  static async getAll(){
    try{
      const veterinary_reports = await dbArcadia.query(
        `SELECT R.veterinary_report_id as Id, R.date as Date, R.status as État, R.food as Nourriture,
          R.quantity as Quantité, R.created_by as Utilisateur, R.animal_id as Animal FROM veterinary_report R
          ORDER BY veterinary_report_id DESC;`);
      const employee_reports = await dbArcadia.query(
        `SELECT R.employee_report_id as Id, R.date as Date, R.food as Nourriture, 
          R.quantity as Quantité, R.created_by as Utilisateur, R.animal_id as Animal FROM employee_report R
          ORDER BY employee_report_id DESC;`);
      return {veterinary_reports, employee_reports};
    }catch(err){
      throw err;
    }
  }

  static async getAllByRol({ rol }){
    try{
      const reports = await dbArcadia.query(
        `SELECT * FROM ${rol}_report ORDER BY ${rol}_report_id DESC;`);
      return reports;
    }catch(err){
      throw err;
    }
  }

  static async getOne( input ){
    const { report_id, rol } = input;
    let sql_statement = ""
    if(rol == 'veterinary'){
      sql_statement = `SELECT R.veterinary_report_id as Id, R.date as Date, R.status as État, R.food as Nourriture,
        R.quantity as Quantité, R.created_by as Utilisateur, R.animal_id as Animal FROM veterinary_report R
        WHERE R.veterinary_report_id = ?`
    }else{
      sql_statement =`SELECT R.employee_report_id as Id, R.date as Date, R.food as Nourriture, 
        R.quantity as Quantité, R.created_by as Utilisateur, R.animal_id as Animal FROM employee_report R
        WHERE R.veterinary_report_id = ?`
    }
    try{
      const report = await dbArcadia.query(sql_statement,[report_id]);
      return report;
    }catch(err){
      throw err;
    }
  }

  static async create( input ){
    const { date, status, food, quantity, created_by, animal_id, rol } = input;
    try {
      let sql_statement = [] 
      if(rol == 'veterinary'){
        sql_statement[0] = `INSERT INTO veterinary_report ( date, status, food, quantity, created_by, animal_id ) VALUES (?, ?, ?, ?, ?, ?);`
        sql_statement[1] = [date, status, food, quantity, created_by, animal_id]
      }else{
        sql_statement[0] =`INSERT INTO employee_report ( date, food, quantity, created_by, animal_id ) VALUES (?, ?, ?, ?, ?);`,
        sql_statement[1] = [date, food, quantity, created_by, animal_id]
      }
      const result = await dbArcadia.query( ...sql_statement)
      return ({report_id: result.insertId})
    } catch (err) {     
      console.log(err)
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
    try {
      const { affectedRows } = await dbArcadia.query(
        `DELETE FROM ${input.rol}_report WHERE ${input.rol}_report_id = ?;`,
        [input.report_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      throw new Error('Error deleting report')
    }
  }
}
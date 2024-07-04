import dbArcadia from "../database/db.js";

export class ServiceModel {
  static async getAll(){
    const services = await dbArcadia.query('SELECT * FROM service;');
    return services;
  }
}
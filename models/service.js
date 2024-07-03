import { DBConnector } from "../database/db.js";

export class ServiceModel {
  static async getAll(){
    const services = await DBConnector.query('SELECT * FROM service;');
    return services;
  }
}
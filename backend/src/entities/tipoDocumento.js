import executeQuery from "../utils/db.js";

class TipoDocumento {
    tipdoc_id;
    tipdoc_nombre;
    tipdoc_abreviatura;
    constructor(id, nombre, abreviatura) {
      this.tipdoc_id = id;
      this.tipdoc_nombre = nombre;
      this.tipdoc_abreviatura = abreviatura;
    }
  
    async getAllTipoDocumento() {
      let sql = /*sql*/`SELECT tipdoc_id as id, tipdoc_nombre as nombre, tipdoc_abreviatura as abreviatura FROM tipo_documento`;
      try {
        const result = await executeQuery(sql);
        return result.data;
      } catch (error) {
        throw error;
      }
    }
  
    async getTipoDocumentoById() {
      let sql = /*sql*/`SELECT tipdoc_id as id, tipdoc_nombre as nombre, tipdoc_abreviatura as abreviatura FROM tipo_documento WHERE tipdoc_id = \'${this.tipdoc_id}\'`;
      try {
        const result = await executeQuery(sql);
        return result.data;
      } catch (error) {
        throw error;
      }
    }
  
    async postTipoDocumento() {
      let sql = /*sql*/`INSERT INTO tipo_documento (tipdoc_nombre, tipdoc_abreviatura) VALUES (\'${this.tipdoc_nombre}\', \'${this.tipdoc_abreviatura}\')`;
      try {
        const result = await executeQuery(sql);
        return result.data;
      } catch (error) {
        throw error;
      }
    }

  }
  


export default TipoDocumento;
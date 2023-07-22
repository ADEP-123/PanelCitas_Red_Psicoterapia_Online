import executeQuery from "../utils/db.js";

class Acudiente {
    acu_id;
    acu_tipdoc;
    acu_nombre_completo;
    acu_genero;
    acu_fechNac;
    acu_movPerso;
    acu_telefonoHogar;
    acu_email;
    constructor(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email) {
      this.acu_id = id;
      this.acu_tipdoc = tipoDocumento;
      this.acu_nombre_completo = nombre;
      this.acu_genero = genero;
      this.acu_fechNac = fechaNacimiento;
      this.acu_movPerso = telefPersonal;
      this.acu_telefonoHogar = telefHogar;
      this.acu_email = email;
    }

    async postAcudiente() {
      let sql = /*sql*/`
        INSERT INTO acudiente (
          acu_id,
          acu_tipdoc,
          acu_nombre_completo,
          acu_genero,
          acu_fechNac,
          acu_movPerso,
          acu_telefonoHogar,
          acu_email
        ) VALUES (
          \'${this.acu_id}\',
          \'${this.acu_tipdoc}\',
          \'${this.acu_nombre_completo}\',
          \'${this.acu_genero}\',
          \'${this.acu_fechNac}\',
          \'${this.acu_movPerso}\',
          ${this.acu_telefonoHogar === undefined ? 'NULL' : `'${this.acu_telefonoHogar}'`},
          \'${this.acu_email}\'
        )`;
      try {
        const result = await executeQuery(sql);
        return result.data;
      } catch (error) {
        throw error;
      }
    }
  }
  


export default Acudiente;
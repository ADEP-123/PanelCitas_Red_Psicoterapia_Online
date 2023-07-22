import executeQuery from "../utils/db.js";

class Paciente {
    pac_id;
    pac_tipdoc;
    pac_nombre_completo;
    pac_genero;
    pac_fechNac;
    pac_acudiente;
    pac_movPerso;
    pac_telefonoHogar;
    pac_email;
    constructor(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email) {
        this.pac_id = id;
        this.pac_tipdoc = tipoDocumento;
        this.pac_nombre_completo = nombre;
        this.pac_genero = genero;
        this.pac_fechNac = fechaNacimiento;
        this.pac_acudiente = acudiente;
        this.pac_movPerso = telefPersonal;
        this.pac_telefonoHogar = telefHogar;
        this.pac_email = email;
    }

    async getAllPacientes() {
        let sql = /*sql*/`
          SELECT
            pac_id as id,
            pac_tipdoc as tipoDocumento,
            pac_nombre_completo as nombre,
            pac_genero as genero,
            pac_fechNac as fechaNacimiento,
            pac_acudiente as acudiente,
            pac_movPerso as telefPersonal,
            pac_telefonoHogar as telfHogar,
            pac_email as email
          FROM paciente`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getPacienteById() {
        let sql = /*sql*/`
          SELECT
            pac_id as id,
            pac_tipdoc as tipoDocumento,
            pac_nombre_completo as nombre,
            pac_genero as genero,
            pac_fechNac as fechaNacimiento,
            pac_acudiente as acudiente,
            pac_movPerso as telefPersonal,
            pac_telefonoHogar as telfHogar,
            pac_email as email
          FROM paciente
          WHERE pac_id = \'${this.pac_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async postPaciente() {
        let sql = /*sql*/`
        INSERT INTO paciente (
          pac_id,
          pac_tipdoc,
          pac_nombre_completo,
          pac_genero,
          pac_fechNac,
          pac_acudiente,
          pac_movPerso,
          pac_telefonoHogar,
          pac_email
        ) VALUES (
        \'${this.pac_id}\',
        \'${this.pac_tipdoc}\',
        \'${this.pac_nombre_completo}\',
        \'${this.pac_genero}\',
        \'${this.pac_fechNac}\',
        ${this.pac_acudiente === undefined ? 'NULL' : `'${this.pac_acudiente}'`},
        \'${this.pac_movPerso}\',
        ${this.pac_telefonoHogar === undefined ? 'NULL' : `'${this.pac_telefonoHogar}'`},
        \'${this.pac_email}\'
        )`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async putPaciente() {
        let sql = /*sql*/`
          UPDATE paciente
          SET
            pac_tipdoc = \'${this.pac_tipdoc}\',
            pac_nombre_completo = \'${this.pac_nombre_completo}\',
            pac_genero = \'${this.pac_genero}\',
            pac_fechNac = \'${this.pac_fechNac}\',
            pac_acudiente = ${this.pac_acudiente === undefined ? 'NULL' : `'${this.pac_acudiente}'`},
            pac_movPerso = \'${this.pac_movPerso}\',
            pac_telefonoHogar = ${this.pac_telefonoHogar === undefined ? 'NULL' : `'${this.pac_telefonoHogar}'`},
            pac_email = \'${this.pac_email}\'
          WHERE pac_id = \'${this.pac_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async deletePaciente() {
        let sql = /*sql*/`
          DELETE FROM paciente
          WHERE pac_id = \'${this.pac_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

}


export default Paciente;
import executeQuery from "../utils/db.js";

class TipoCita {
    tipoCita_id;
    tipoCita_nombre;
    constructor() { }
    async getAllTipoCita() {
        let sql = /*sql*/`SELECT tipoCita_id as ID, tipoCita_nombre as Nombre FROM tipo_cita`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    async getTipoCitabyId(Id) {
        let sql = /*sql*/`SELECT tipoCita_id as Id, tipoCita_nombre as Nombre FROM tipo_cita where tipoCita_id = \'${Id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    async postTipoCita(nombre) {
        let sql = /*sql*/`INSERT INTO tipo_cita (tipoCita_nombre) VALUES (\'${nombre}\')`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}

export default TipoCita;
import executeQuery from "../utils/db.js";

class TipoCita {
    tipoCita_id;
    tipoCita_nombre;
    constructor(id, nombre) {
        this.tipoCita_id = id;
        this.tipoCita_nombre = nombre;
    }
    async getAllTipoCita() {
        let sql = /*sql*/`SELECT tipoCita_id as ID, tipoCita_nombre as Nombre FROM tipo_cita`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    async getTipoCitabyId() {
        let sql = /*sql*/`SELECT tipoCita_id as Id, tipoCita_nombre as Nombre FROM tipo_cita where tipoCita_id = \'${this.tipoCita_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    async postTipoCita() {
        let sql = /*sql*/`INSERT INTO tipo_cita (tipoCita_nombre) VALUES (\'${this.tipoCita_nombre}\')`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    async putTipoCita() {
        let sql = /*sql*/`UPDATE tipo_cita SET tipoCita_nombre = \'${this.tipoCita_nombre}\' WHERE tipoCita_id = \'${this.tipoCita_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
    async deleteTipoCita(id) {
        let sql = /*sql*/`DELETE FROM tipo_cita WHERE tipoCita_id = \'${this.tipoCita_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}

export default TipoCita;
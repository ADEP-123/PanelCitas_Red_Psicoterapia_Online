import executeQuery from "../utils/db.js";

class EstadoCita {
    constructor(id, nombre) {
        this.estadoCita_id = id;
        this.estadoCita_nombre = nombre;
    }

    async getAllEstadoCita() {
        let sql = /*sql*/`SELECT estadoCita_id as id, estadoCita_nombre as nombre FROM estado_cita`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getEstadoCitabyId() {
        let sql = /*sql*/`SELECT estadoCita_id as id, estadoCita_nombre as nombre FROM estado_cita WHERE estadoCita_id = \'${this.estadoCita_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async postEstadoCita() {
        let sql = /*sql*/`INSERT INTO estado_cita (estadoCita_nombre) VALUES (\'${this.estadoCita_nombre}\')`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async putEstadoCita() {
        let sql = /*sql*/`UPDATE estado_cita SET estadoCita_nombre = \'${this.estadoCita_nombre}\' WHERE estadoCita_id = \'${this.estadoCita_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }


}


export default EstadoCita;
import executeQuery from "../utils/db.js";

class EstadoCita {
    constructor(id, nombre) {
        this.estadoCita_id = id;
        this.estadoCita_nombre = nombre;
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

}


export default EstadoCita;
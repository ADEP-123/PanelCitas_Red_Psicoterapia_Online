import executeQuery from "../utils/db.js";


class Cita {
    cita_id;
    cita_tipo;
    cita_estado;
    fecha_inicio;
    fecha_fin;
    fecha_actualizacion_estado;
    cita_historial;
    constructor(id, tipo, estado, inicio, fin, ultimaActualiz, historial) {
        this.cita_id = id;
        this.cita_tipo = tipo;
        this.cita_estado = estado;
        this.fecha_inicio = inicio;
        this.fecha_fin = fin;
        this.fecha_actualizacion_estado = ultimaActualiz;
        this.cita_historial = historial;
    }

    async getAllCitas() {
        let sql = /*sql*/`
                SELECT
                    cita_id as id,
                    cita_tipo as tipo,
                    cita_estado as estado,
                    fecha_inicio as inicio,
                    fecha_fin as fin,
                    fecha_actualizacion_estado as ultimaActualiz,
                    cita_historial as historial
                FROM cita`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getCitaById() {
        let sql = /*sql*/`
                SELECT
                    cita_id as id,
                    cita_tipo as tipo,
                    cita_estado as estado,
                    fecha_inicio as inicio,
                    fecha_fin as fin,
                    fecha_actualizacion_estado as ultimaActualiz,
                    cita_historial as historial
                FROM cita
                WHERE cita_id = \'${this.cita_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getAllCitaByHistorial() {
        let sql = /*sql*/`
                SELECT
                    cita_id as id,
                    cita_tipo as tipo,
                    cita_estado as estado,
                    fecha_inicio as inicio,
                    fecha_fin as fin,
                    fecha_actualizacion_estado as ultimaActualiz,
                    cita_historial as historial
                FROM cita
                WHERE cita_historial = \'${this.cita_historial}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async postCita() {
        let sql = /*sql*/`
                INSERT INTO cita (
                    cita_tipo,
                    cita_estado,
                    fecha_inicio,
                    fecha_fin,
                    cita_historial
                ) VALUES (
                    \'${this.cita_tipo}\',
                    \'${this.cita_estado}\',
                    \'${this.fecha_inicio}\',
                    \'${this.fecha_fin}\',
                    \'${this.cita_historial}\'
                )`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}

export default Cita;
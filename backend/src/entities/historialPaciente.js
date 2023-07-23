import executeQuery from "../utils/db.js";

class HistorialPaciente {

    historialPaciente_id;
    historialPaciente_paciente;
    constructor(id, paciente) {
        this.historialPaciente_id = id;
        this.historialPaciente_paciente = paciente;
    }

    async getAllHistorialPacientes() {
        let sql = /*sql*/`
            SELECT
                historialPaciente_id as id,
                fecha_inicio as fechInicHistorial,
                historialPaciente_paciente as paciente
            FROM historial_paciente`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getHistorialPacienteById() {
        let sql = /*sql*/`
            SELECT
            A.historialPaciente_id as id,
            A.fecha_inicio as fechInicHistorial,
            A.historialPaciente_paciente as IdPaciente,
            B.pac_nombre_completo as nomPaciente,
            B.pac_acudiente as IdAcudiente,
            C.cita_id as IdCita,
            C.fecha_inicio as inCita,
            C.fecha_fin as finCita
            FROM historial_paciente A 
            JOIN paciente B ON A.historialPaciente_paciente = B.pac_id
            JOIN cita C ON C.cita_historial = A.historialPaciente_id
            WHERE historialPaciente_id = \'${this.historialPaciente_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data[0];
        } catch (error) {
            throw error;
        }
    }

    async getHistorialPacienteByPacienteId() {
        let sql = /*sql*/`
            SELECT
            A.historialPaciente_id as id,
            A.fecha_inicio as fechInicHistorial,
            A.historialPaciente_paciente as IdPaciente,
            B.pac_nombre_completo as nomPaciente,
            B.pac_acudiente as IdAcudiente,
            C.cita_id as IdCita,
            C.fecha_inicio as inCita,
            C.fecha_fin as finCita
            FROM historial_paciente A 
            JOIN paciente B ON A.historialPaciente_paciente = B.pac_id
            JOIN cita C ON C.cita_historial = A.historialPaciente_id
            WHERE historialPaciente_paciente = \'${this.historialPaciente_paciente}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async postHistorialPaciente() {
        let sql = /*sql*/`
            INSERT INTO historial_paciente (historialPaciente_paciente)
            VALUES (
                \'${this.historialPaciente_paciente}\'
            )`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async putHistorialPaciente() {
        let sql = /*sql*/`
            UPDATE historial_paciente
            SET
                historialPaciente_paciente = \'${this.historialPaciente_paciente}\'
            WHERE historialPaciente_id = \'${this.historialPaciente_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async deleteHistorialPaciente() {
        let sql = /*sql*/`
            DELETE FROM historial_paciente
            WHERE historialPaciente_id = ${this.historialPaciente_id}`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}

export default HistorialPaciente;
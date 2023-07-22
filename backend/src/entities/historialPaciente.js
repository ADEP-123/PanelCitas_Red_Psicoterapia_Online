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
                historialPaciente_id as id,
                fecha_inicio as fechInicHistorial,
                historialPaciente_paciente as paciente
            FROM historial_paciente
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
                historialPaciente_id as id,
                fecha_inicio as fechInicHistorial,
                historialPaciente_paciente as paciente
            FROM historial_paciente
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
}

export default HistorialPaciente;
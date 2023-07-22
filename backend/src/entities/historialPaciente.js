import executeQuery from "../utils/db.js";

class HistorialPaciente {

    historialPaciente_id;
    historialPaciente_paciente;
    constructor(id, paciente) {
        this.historialPaciente_id = id;
        this.historialPaciente_paciente = paciente;
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
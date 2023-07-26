import { Expose, Type, Transform } from "class-transformer";


export class historialPacienteDTO {
    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "paciente" })
    @Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) && value) return value; else throw { status: 400, message: `Error en la escritura del documento de identificacion del paciente` } }, { toClassOnly: true })
    paciente: string;

    constructor(historialPaciente_id: number, historialPaciente_paciente: string) {
        this.id = historialPaciente_id;
        this.paciente = historialPaciente_paciente;
    }
}
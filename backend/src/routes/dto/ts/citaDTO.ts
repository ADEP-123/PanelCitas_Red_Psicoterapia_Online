import { Expose, Type, Transform } from "class-transformer";

export class citaDTO {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "tipo" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    tipo: number;

    @Expose({ name: "estado" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    estado: number;

    @Expose({ name: "inicio" })
    @Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(fechaSinComillas)) return value; else throw { status: 400, message: `Error en feha y/o hora de inicio` }
    }, { toClassOnly: true })
    inicio: string;

    @Expose({ name: "fin" })
    @Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(fechaSinComillas)) return value; else throw { status: 400, message: `Error en feha y/o hora final` }
    }, { toClassOnly: true })
    fin: string;

    @Expose({ name: "historial" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    historial: number;

    constructor(cita_id: number, cita_tipo: number, cita_estado: number, fecha_inicio: string, fecha_fin: string, cita_historial: number) {
        this.id = cita_id;
        this.tipo = cita_tipo;
        this.estado = cita_estado;
        this.inicio = fecha_inicio;
        this.fin = fecha_fin;
        this.historial = cita_historial
    }
}
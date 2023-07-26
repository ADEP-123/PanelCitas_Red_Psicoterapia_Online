import { Expose, Type, Transform } from "class-transformer";

export class tipoDocumentoDTO {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "nombre" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) && value) return value; else throw { status: 400, message: `Error en tipo de parametro 1` } }, { toClassOnly: true })
    nombre: string;

    @Expose({ name: "abreviatura" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) && value) return value; else throw { status: 400, message: `Error en tipo de parametro 1` } }, { toClassOnly: true })
    abreviatura: string;

    constructor(tipdoc_id: number, tipdoc_nombre: string, tipdoc_abreviatura: string) {
        this.id = tipdoc_id;
        this.nombre = tipdoc_nombre;
        this.abreviatura = tipdoc_abreviatura
    }
}
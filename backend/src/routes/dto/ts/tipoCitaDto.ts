import { Expose, Type, Transform } from "class-transformer";

export class tipoCitaDTO {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "nombre" })
    @Transform(({ value, key }) => {
        if (/^[a-z A-Z]+$/.test(value) && value) return value; else throw { status: 400, message: `Error en escritura del nombre` }
    }, { toClassOnly: true })
    nombre: string;

    constructor(tipoCita_id: number, tipoCita_nombre: string) {
        this.id = tipoCita_id;
        this.nombre = tipoCita_nombre;
    }
}
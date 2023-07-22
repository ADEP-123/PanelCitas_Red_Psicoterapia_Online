import { Expose, Type, Transform } from "class-transformer";

export class tipoCitaDTO {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "nombre" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro 1` } }, { toClassOnly: true })
    nombre: string;

    constructor(tipoCita_id: number, tipoCita_nombre: string) {
        this.id = tipoCita_id;
        this.nombre = tipoCita_nombre;
    }
}
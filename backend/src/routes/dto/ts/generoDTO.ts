import { Expose, Type, Transform } from "class-transformer";

export class generoDTO {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (parseInt(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del id del historial` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "nombre" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro 1` } }, { toClassOnly: true })
    nombre: string;

    @Expose({ name: "abreviatura" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro 1` } }, { toClassOnly: true })
    abreviatura: string;

    constructor(gen_id: number, gen_nombre: string, gen_abreviatura: string) {
        this.id = gen_id;
        this.nombre = gen_nombre;
        this.abreviatura = gen_abreviatura
    }
}
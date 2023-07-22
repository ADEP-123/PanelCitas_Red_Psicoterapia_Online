import { Expose, Type, Transform } from "class-transformer";


export class acudienteDTO {
    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (/^[0-9]{10,12}$/.test(value)) return value; else throw { status: 400, message: `Error en ecritura del documento de identificacion` } }, { toClassOnly: true })
    id: string;

    @Expose({ name: "tipoDocumento" })
    @Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true })
    tipoDocumento: number;

    @Expose({ name: "nombre" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) || value == null) return value; else throw { status: 400, message: `Error de escritura del nombre` } }, { toClassOnly: true })
    nombre: string;

    @Expose({ name: "genero" })
    @Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true })
    genero: number;

    @Expose({ name: "fechaNacimiento" })
    @Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaSinComillas)) return value; else throw { status: 400, message: `Error en escritura de fecha de nacimiento, recuerde que el formato es (YYYY-MM-DD)` }
    }, { toClassOnly: true })
    fechaNacimiento: string;

    @Expose({ name: "telefPersonal" })
    @Transform(({ value, key }) => { if (/^[0-9]+$/.test(value)) return value; else throw { status: 400, message: `Error en la escritura del telefono personal` } }, { toClassOnly: true })
    telefPersonal: string;

    @Expose({ name: "telefHogar" })
    @Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en la escritura del telefono de hogar` } }, { toClassOnly: true })
    telefHogar: string;

    @Expose({ name: "email" })
    @Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) return value; else throw { status: 400, message: `Error en la escritura del email`, value: value } }, { toClassOnly: true })
    email: string;


    constructor(acu_id: string, acu_tipdoc: number, acu_nombre_completo: string, acu_genero: number, acu_fechNac: string, acu_movPerso: string, acu_telefonoHogar: string, acu_email: string) {
        this.id = acu_id;
        this.tipoDocumento = acu_tipdoc;
        this.nombre = acu_nombre_completo;
        this.genero = acu_genero;
        this.fechaNacimiento = acu_fechNac;
        this.telefPersonal = acu_movPerso;
        this.telefHogar = acu_telefonoHogar;
        this.email = acu_email;
    }
}
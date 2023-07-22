import { Expose, Type, Transform } from "class-transformer";


export class pacienteDTO {
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

    @Expose({ name: "acudiente" })
    @Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en la escritura del acudiente` } }, { toClassOnly: true })
    acudiente: string;

    @Expose({ name: "telefPersonal" })
    @Transform(({ value, key }) => { if (/^[0-9]+$/.test(value)) return value; else throw { status: 400, message: `Error en la escritura del telefono personal` } }, { toClassOnly: true })
    telefPersonal: string;

    @Expose({ name: "telefHogar" })
    @Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en la escritura del telefono de hogar` } }, { toClassOnly: true })
    telefHogar: string;

    @Expose({ name: "email" })
    @Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) return value; else throw { status: 400, message: `Error en la escritura del email`, value: value } }, { toClassOnly: true })
    email: string;


    constructor(pac_id: string, pac_tipdoc: number, pac_nombre_completo: string, pac_genero: number, pac_fechNac: string, pac_acudiente: string, pac_movPerso: string, pac_telefonoHogar: string, pac_email: string) {
        this.id = pac_id;
        this.tipoDocumento = pac_tipdoc;
        this.nombre = pac_nombre_completo;
        this.genero = pac_genero;
        this.fechaNacimiento = pac_fechNac;
        this.acudiente = pac_acudiente;
        this.telefPersonal = pac_movPerso;
        this.telefHogar = pac_telefonoHogar;
        this.email = pac_email;
    }
}
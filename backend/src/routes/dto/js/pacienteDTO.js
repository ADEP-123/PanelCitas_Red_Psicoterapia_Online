var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class pacienteDTO {
    constructor(pac_id, pac_tipdoc, pac_nombre_completo, pac_genero, pac_fechNac, pac_acudiente, pac_movPerso, pac_telefonoHogar, pac_email) {
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
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => { if (/^[0-9]{10,12}$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del documento de identificacion` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pacienteDTO.prototype, "id", void 0);
__decorate([
    Expose({ name: "tipoDocumento" }),
    Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true }),
    __metadata("design:type", Number)
], pacienteDTO.prototype, "tipoDocumento", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error de escritura del nombre` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pacienteDTO.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "genero" }),
    Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true }),
    __metadata("design:type", Number)
], pacienteDTO.prototype, "genero", void 0);
__decorate([
    Expose({ name: "fechaNacimiento" }),
    Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(fechaSinComillas))
            return value;
        else
            throw { status: 400, message: `Error en escritura de fecha de nacimiento, recuerde que el formato es (YYYY-MM-DD)` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], pacienteDTO.prototype, "fechaNacimiento", void 0);
__decorate([
    Expose({ name: "acudiente" }),
    Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en la escritura del acudiente` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pacienteDTO.prototype, "acudiente", void 0);
__decorate([
    Expose({ name: "telefPersonal" }),
    Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en la escritura del telefono personal` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pacienteDTO.prototype, "telefPersonal", void 0);
__decorate([
    Expose({ name: "telefHogar" }),
    Transform(({ value, key }) => { if (/^[0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en la escritura del telefono de hogar` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pacienteDTO.prototype, "telefHogar", void 0);
__decorate([
    Expose({ name: "email" }),
    Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en la escritura del email`, value: value }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pacienteDTO.prototype, "email", void 0);

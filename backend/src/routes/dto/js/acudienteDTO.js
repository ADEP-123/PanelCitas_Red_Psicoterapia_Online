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
export class acudienteDTO {
    constructor(acu_id, acu_tipdoc, acu_nombre_completo, acu_genero, acu_fechNac, acu_movPerso, acu_telefonoHogar, acu_email) {
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
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => { if (/^[0-9]{10,12}$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del documento de identificacion` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "id", void 0);
__decorate([
    Expose({ name: "tipoDocumento" }),
    Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true }),
    __metadata("design:type", Number)
], acudienteDTO.prototype, "tipoDocumento", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error de escritura del nombre` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "genero" }),
    Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true }),
    __metadata("design:type", Number)
], acudienteDTO.prototype, "genero", void 0);
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
], acudienteDTO.prototype, "fechaNacimiento", void 0);
__decorate([
    Expose({ name: "telefPersonal" }),
    Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en la escritura del telefono personal` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "telefPersonal", void 0);
__decorate([
    Expose({ name: "telefHogar" }),
    Transform(({ value, key }) => { if (/^[0-9]+$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en la escritura del telefono de hogar` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "telefHogar", void 0);
__decorate([
    Expose({ name: "email" }),
    Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en la escritura del email`, value: value }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], acudienteDTO.prototype, "email", void 0);

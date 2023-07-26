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
export class citaDTO {
    constructor(cita_id, cita_tipo, cita_estado, fecha_inicio, fecha_fin, cita_historial) {
        this.id = cita_id;
        this.tipo = cita_tipo;
        this.estado = cita_estado;
        this.inicio = fecha_inicio;
        this.fin = fecha_fin;
        this.historial = cita_historial;
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => { if (parseInt(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del id` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "id", void 0);
__decorate([
    Expose({ name: "tipo" }),
    Transform(({ value, key }) => { if (parseInt(value))
        return value;
    else
        throw { status: 400, message: `Error en ecritura del id del historial` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "tipo", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value, key }) => { if (parseInt(value))
        return value;
    else
        throw { status: 400, message: `Error en ecritura del id del historial` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "estado", void 0);
__decorate([
    Expose({ name: "inicio" }),
    Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(fechaSinComillas) && value)
            return value;
        else
            throw { status: 400, message: `Error en feha y/o hora de inicio` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], citaDTO.prototype, "inicio", void 0);
__decorate([
    Expose({ name: "fin" }),
    Transform(({ value, key }) => {
        const fechaSinComillas = value.replace(/\"/g, '');
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(fechaSinComillas) && value)
            return value;
        else
            throw { status: 400, message: `Error en feha y/o hora final` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], citaDTO.prototype, "fin", void 0);
__decorate([
    Expose({ name: "historial" }),
    Transform(({ value, key }) => { if (parseInt(value))
        return value;
    else
        throw { status: 400, message: `Error en ecritura del id del historial` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citaDTO.prototype, "historial", void 0);

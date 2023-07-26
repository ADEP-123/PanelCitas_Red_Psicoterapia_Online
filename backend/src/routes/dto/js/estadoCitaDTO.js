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
export class estadoCitaDTO {
    constructor(estadoCita_id, estadoCita_nombre) {
        this.id = estadoCita_id;
        this.nombre = estadoCita_nombre;
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => { if (parseInt(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del id del historial` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], estadoCitaDTO.prototype, "id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) && value)
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro 1` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], estadoCitaDTO.prototype, "nombre", void 0);

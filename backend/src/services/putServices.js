import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";

const putTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.putTipoCita(id, nombre);
    return result;
};

const putEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.putEstadoCita(id, nombre);
    return result;
};

export {
    putTipoCitaService,
    putEstadoCitaService
}
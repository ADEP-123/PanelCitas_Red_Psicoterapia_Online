import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";

const postTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.postTipoCita(nombre);
    return result;
}

const postEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.postEstadoCita(nombre);
    return result
}

export {
    postTipoCitaService,
    postEstadoCitaService
}
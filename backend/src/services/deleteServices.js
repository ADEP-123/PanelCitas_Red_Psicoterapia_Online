import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";

const deleteTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.deleteTipoCita(id);
    return result;
}

const delteEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.deleteEstadoCita(nombre);
    return result
}

export {
    deleteTipoCitaService,
    delteEstadoCitaService
}
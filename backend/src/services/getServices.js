import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";

const getTipoCitaService = async (id, nombre) => {
    let result
    const tipoCita = new TipoCita(id, nombre);
    if (id) {
        result = await tipoCita.getTipoCitabyId(id);
    } else {
        result = await tipoCita.getAllTipoCita();
    }
    return result;
};

const getEstadoCitaService = async (id, nombre) => {
    let result
    const estadoCita = new EstadoCita(id, nombre);
    if (id) {
        result = await estadoCita.getEstadoCitabyId(id);
    } else {
        result = await estadoCita.getAllEstadoCita();
    }
    return result;
};


export {
    getTipoCitaService,
    getEstadoCitaService
}
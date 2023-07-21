import TipoCita from "../entities/tipoCita.js";

const getTipoCitaService = async (id, nombre) => {
    let result
    const tipoCita = new TipoCita(id, nombre);
    if (id) {
        result = await tipoCita.getTipoCitabyId(id);
    } else {
        result = await tipoCita.getAllTipoCita();
    }
    return result;
}


export {
    getTipoCitaService
}
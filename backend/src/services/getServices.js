import TipoCita from "../entities/tipoCita.js";

const getTipoCitaService = async (id) => {
    let result
    if (id) {
        const tipoCita = new TipoCita();
        result = await tipoCita.getTipoCitabyId(id);
    } else {
        const tipoCita = new TipoCita();
        result = await tipoCita.getAllTipoCita();
    }
    return result;
}

export {
    getTipoCitaService
}
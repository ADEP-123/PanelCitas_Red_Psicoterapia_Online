import TipoCita from "../entities/tipoCita.js";

const deleteTipoCitaService = async (id) => {
    const tipoCita = new TipoCita();
    const result = await tipoCita.deleteTipoCita(id);
    return result;
}

export {
    deleteTipoCitaService
}
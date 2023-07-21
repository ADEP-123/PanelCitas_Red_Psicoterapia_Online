import TipoCita from "../entities/tipoCita.js";

const deleteTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.deleteTipoCita(id);

    return result;
}

export {
    deleteTipoCitaService
}
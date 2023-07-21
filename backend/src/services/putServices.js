import TipoCita from "../entities/tipoCita.js";

const putTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.putTipoCita(id, nombre);
    return result;
}

export {
    putTipoCitaService
}
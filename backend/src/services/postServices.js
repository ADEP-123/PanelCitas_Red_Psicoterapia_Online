import TipoCita from "../entities/tipoCita.js";

const postTipoCita = async (nombre) => {
    const tipoCita = new TipoCita();
    const result = await tipoCita.postTipoCita(nombre);
    return result;
}

export {
    postTipoCita
}
import TipoCita from "../entities/tipoCita.js";

const postTipoCita = async (id,nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.postTipoCita(nombre);
    return result;
}

export {
    postTipoCita
}
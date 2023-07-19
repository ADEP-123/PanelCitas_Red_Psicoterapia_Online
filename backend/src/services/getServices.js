import TipoCita from "../entities/tipoCita.js";

const getTodasCitas = async () => {
    const tipoCita = new TipoCita();
    const result = await tipoCita.getAllTipoCita();
    return result;
}

export {
    getTodasCitas
}
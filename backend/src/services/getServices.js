import TipoCita from "../entities/tipoCita.js";

const getTipoCita = async (Id) => {
    let result
    if (Id) {
        const tipoCita = new TipoCita();
        result = await tipoCita.getTipoCitabyId(Id);
    } else {
        const tipoCita = new TipoCita();
        result = await tipoCita.getAllTipoCita();
    }
    return result;
}

export {
    getTipoCita
}
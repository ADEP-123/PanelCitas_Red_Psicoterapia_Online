import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";

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

const getTipoDocumentoService = async (id, nombre, abreviatura) => {
    let result
    const estadoCita = new TipoDocumento(id, nombre, abreviatura);
    if (id) {
        result = await estadoCita.getTipoDocumentoById(id);
    } else {
        result = await estadoCita.getAllTipoDocumento();
    }
    return result;
};


export {
    getTipoCitaService,
    getEstadoCitaService,
    getTipoDocumentoService
}
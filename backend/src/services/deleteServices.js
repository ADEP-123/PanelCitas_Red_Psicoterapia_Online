import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";

const deleteTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.deleteTipoCita(id);
    return result;
}

const deleteEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.deleteEstadoCita(id);
    return result
}

const deleteTipoDocumentoService = async (id, nombre, abreviatura) => {
    const tipoDocumento = new TipoDocumento(id, nombre, abreviatura);
    const result = await tipoDocumento.deleteTipoDocumento(id);
    return result
};

export {
    deleteTipoCitaService,
    deleteEstadoCitaService,
    deleteTipoDocumentoService
}
import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";

const deleteTipoCitaService = async (id, nombre) => {
    const tipoCita = new TipoCita(id, nombre);
    const result = await tipoCita.deleteTipoCita();
    return result;
}

const deleteEstadoCitaService = async (id, nombre) => {
    const estadoCita = new EstadoCita(id, nombre);
    const result = await estadoCita.deleteEstadoCita();
    return result
}

const deleteTipoDocumentoService = async (id, nombre, abreviatura) => {
    const tipoDocumento = new TipoDocumento(id, nombre, abreviatura);
    const result = await tipoDocumento.deleteTipoDocumento();
    return result
};

export {
    deleteTipoCitaService,
    deleteEstadoCitaService,
    deleteTipoDocumentoService
}
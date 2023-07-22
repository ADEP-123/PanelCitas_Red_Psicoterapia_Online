import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";
import Acudiente from "../entities/acudiente.js";

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
    const tipoDocumento = new TipoDocumento(id, nombre, abreviatura);
    if (id) {
        result = await tipoDocumento.getTipoDocumentoById(id);
    } else {
        result = await tipoDocumento.getAllTipoDocumento();
    }
    return result;
};

const getAcudienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email) => {
    let result
    const acudiente = new Acudiente(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
    if (id) {
        result = await acudiente.getAcudienteById(id);
    } else {
        result = await acudiente.getAllAcudientes();
    }
    return result;
};


export {
    getTipoCitaService,
    getEstadoCitaService,
    getTipoDocumentoService,
    getAcudienteService
}
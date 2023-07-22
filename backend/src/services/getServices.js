import TipoCita from "../entities/tipoCita.js";
import EstadoCita from "../entities/estadoCita.js";
import TipoDocumento from "../entities/tipoDocumento.js";
import Acudiente from "../entities/acudiente.js";
import Paciente from "../entities/paciente.js";

const getTipoCitaService = async (id, nombre) => {
    let result
    const tipoCita = new TipoCita(id, nombre);
    if (id) {
        result = await tipoCita.getTipoCitabyId();
    } else {
        result = await tipoCita.getAllTipoCita();
    }
    return result;
};

const getEstadoCitaService = async (id, nombre) => {
    let result
    const estadoCita = new EstadoCita(id, nombre);
    if (id) {
        result = await estadoCita.getEstadoCitabyId();
    } else {
        result = await estadoCita.getAllEstadoCita();
    }
    return result;
};

const getTipoDocumentoService = async (id, nombre, abreviatura) => {
    let result
    const tipoDocumento = new TipoDocumento(id, nombre, abreviatura);
    if (id) {
        result = await tipoDocumento.getTipoDocumentoById();
    } else {
        result = await tipoDocumento.getAllTipoDocumento();
    }
    return result;
};

const getAcudienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email) => {
    let result
    const acudiente = new Acudiente(id, tipoDocumento, nombre, genero, fechaNacimiento, telefPersonal, telefHogar, email);
    if (id) {
        result = await acudiente.getAcudienteById();
    } else {
        result = await acudiente.getAllAcudientes();
    }
    return result;
};

const getPacienteService = async (id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email) => {
    let result
    const paciente = new Paciente(id, tipoDocumento, nombre, genero, fechaNacimiento, acudiente, telefPersonal, telefHogar, email);
    if (id) {
        result = await paciente.getPacienteById();
    } else {
        result = await paciente.getAllPacientes();
    }
    return result;
};


export {
    getTipoCitaService,
    getEstadoCitaService,
    getTipoDocumentoService,
    getAcudienteService,
    getPacienteService
}